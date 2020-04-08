import { Negotiation, Negotiations } from '../models/index';
import { NegotiationsView, MessageView } from '../views/index';

export default class NegotiationController {
   private _inputDate: HTMLInputElement;
   private _inputQuantity: HTMLInputElement;
   private _inputValue: HTMLInputElement;
   private _negotiations = new Negotiations();
   private _negotiationsView = new NegotiationsView('#negotiationsView');
   private _messageView = new MessageView('#messageView');

   constructor() {
      this._inputDate = <HTMLInputElement>document.querySelector('#date');
      this._inputQuantity = <HTMLInputElement>(
         document.querySelector('#quantity')
      );
      this._inputValue = <HTMLInputElement>document.querySelector('#value');
      this._negotiationsView.update(this._negotiations);
   }

   add(event: Event): void {
      event.preventDefault();
      let date = new Date(this._inputDate.value.replace(/-/g, ','));
      if (this._isWeekend(date)) {
         this._messageView.update('It is not allow to create on weekends');
         return;
      }

      const negotiation = new Negotiation(
         date,
         parseInt(this._inputQuantity.value),
         parseFloat(this._inputValue.value)
      );

      this._negotiations.add(negotiation);

      this._negotiationsView.update(this._negotiations);

      this._messageView.update('Success');
   }

   private _isWeekend(date: Date) {
      return (
         date.getDay() == WeekDays.Saturday || date.getDay() == WeekDays.Sunday
      );
   }
}

enum WeekDays {
   Sunday,
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
}
