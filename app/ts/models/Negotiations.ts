import { Negotiation } from './index';
import { Printable } from './Printable';

export class Negotiations extends Printable {
   private _negotiations: Negotiation[] = [];

   add(negotiation: Negotiation): void {
      this._negotiations.push(negotiation);
   }

   toArray(): Negotiation[] {
      return [...this._negotiations];
   }

   addLog(): void {
      console.log('---Negotiations---');
      console.log(JSON.stringify(this._negotiations));
   }
}
