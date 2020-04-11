import { Interfaces } from './Interfaces';

export class Negotiation implements Interfaces<Negotiation> {
   constructor(
      readonly date: Date,
      readonly quantity: number,
      readonly value: number
   ) {}

   get volume() {
      return this.quantity * this.value;
   }

   addLog(): void {
      console.log('---Negotiation---');
      console.log(
         `Date: ${this.date},
         Quantity: ${this.quantity},
         Value: ${this.value},
         Volume: ${this.volume}
         `
      );
   }

   isEqual(negotiation: Negotiation): boolean {
      return (
         this.date.getDate() == negotiation.date.getDate() &&
         this.date.getMonth() == negotiation.date.getMonth() &&
         this.date.getFullYear() == negotiation.date.getFullYear()
      );
   }
}
