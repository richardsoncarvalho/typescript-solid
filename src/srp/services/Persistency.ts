import { IPersistency } from '../entities/interfaces/IPersistency';
export class Persistency implements IPersistency {
  saveOrder():void {
    console.log('Salvo com sucesso');
  }
}
