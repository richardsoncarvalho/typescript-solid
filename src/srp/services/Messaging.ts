import { IMessaging } from '../entities/interfaces/IMessaging';
export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada ', msg)
  }
}
