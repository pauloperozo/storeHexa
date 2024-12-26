export class CustomerNotFoundByEmail extends Error {
  constructor(email: string) {
    super(`Customer with email ${email} not found`);
  }
}

export class InvalidOTP extends Error {
  constructor() {
    super('Invalid OTP');
  }
}

export class signTokenFailed extends Error {
  constructor(msj: string) {
    super(msj);
  }
}

export class verifyTokenFailed extends Error {
  constructor(msj: string) {
    super(msj);
  }
}
