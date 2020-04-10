import { Printable } from './Printable';

export class Negotiation extends Printable {
   constructor(
      readonly date: Date,
      readonly quantity: number,
      readonly value: number
   ) {
      super();
   }

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
}
