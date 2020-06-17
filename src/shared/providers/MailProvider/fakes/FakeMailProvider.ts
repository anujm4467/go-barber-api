import IMailProvider from '../interfaces/IMailProvider';

import ISendMailDTO from '../interfaces/dtos/ISendMailDTO';

class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}

export default FakeMailProvider;
