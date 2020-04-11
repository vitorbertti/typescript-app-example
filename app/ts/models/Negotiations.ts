import { Negotiation } from './index';
import { Interfaces } from './Interfaces';

export class Negotiations implements Interfaces<Negotiations> {
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

   isEqual(negotiations: Negotiations): boolean {
      return (
         JSON.stringify(this._negotiations) ==
         JSON.stringify(negotiations.toArray())
      );
   }
}
