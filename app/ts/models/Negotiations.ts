import Negotiation from './Negotiation';

export class Negotiations {
   private _negotiations: Negotiation[] = [];

   add(negotiation: Negotiation): void {
      this._negotiations.push(negotiation);
   }

   toArray(): Negotiation[] {
      return [...this._negotiations];
   }
}
