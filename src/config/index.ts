import 'dotenv/config';
import { env } from 'node:process';

export default {
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: '12h',
  },
  database: {
    type: env.DBTYPE,
    host: env.DBHOST,
    port: Number(env.DBPORT),
    username: env.DBUSER,
    password: env.DBPASSWORD,
    database: env.DBDATABASE,
    synchronize: true,
  },
  mail: {
    host: env.MAILHOST,
    port: Number(env.MAILPORT) || 587,
    secure: env.MAILSECUERE,
    user: env.MAILUSER,
    password: env.MAILPASSWORD,
    from: env.MAILFROM,
  },
};
