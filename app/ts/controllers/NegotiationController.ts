import { Negotiation, Negotiations, NegotiationType } from '../models/index';
import { NegotiationsView, MessageView } from '../views/index';
import { domInject } from '../helpers/decorators/index';

export default class NegotiationController {
   @domInject('#date')
   private _inputDate!: HTMLInputElement;
   @domInject('#quantity')
   private _inputQuantity!: HTMLInputElement;
   @domInject('#value')
   private _inputValue!: HTMLInputElement;
   private _negotiations = new Negotiations();
   private _negotiationsView = new NegotiationsView('#negotiationsView');
   private _messageView = new MessageView('#messageView');

   constructor() {
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

   dataImport() {
      try {
         fetch('http://localhost:8080/data')
            .then((res) => res.json())
            .then((responseData: NegotiationType[]) => {
               responseData
                  .map(
                     (data) =>
                        new Negotiation(new Date(), data.quantity, data.value)
                  )
                  .forEach((negotiation) =>
                     this._negotiations.add(negotiation)
                  );

               this._negotiationsView.update(this._negotiations);
            });
      } catch (err) {
         console.error(err);
      }
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
