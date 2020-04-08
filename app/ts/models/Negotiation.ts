export class Negotiation {
   constructor(
      readonly date: Date,
      readonly quantity: number,
      readonly value: number
   ) {}

   get volume() {
      return this.quantity * this.value;
   }
}
