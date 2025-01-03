import { MailRepository } from '../../application/mail/mail.repository';
import config from '../../../../config';
import nodemailer from 'nodemailer';

export class NodemailerRepositoryImpl implements MailRepository {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.mail.host,
      port: config.mail.port,
      secure: config.mail.secure,
      auth: {
        user: config.mail.user,
        pass: config.mail.password,
      },
    });
  }

  async send(payload: {
    to: string;
    subject: string;
    text: string;
    html?: string;
  }): Promise<void> {
    const { to, subject, text, html } = payload;

    if (!to || !subject || !text) {
      throw new Error('Missing required fields');
    }

    const mailOptions = {
      from: config.mail.from,
      to,
      subject,
      text,
      html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}
