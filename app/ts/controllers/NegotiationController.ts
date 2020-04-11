import { Negotiation, Negotiations, NegotiationType } from '../models/index';
import { NegotiationsView, MessageView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegotiationService, HandlerFunction } from '../services/index';
import { printLog } from '../helpers/index';

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
   private _negotiationService = new NegotiationService();

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
      printLog(negotiation, this._negotiations);

      this._negotiationsView.update(this._negotiations);

      this._messageView.update('Success');
   }

   private _isWeekend(date: Date) {
      return (
         date.getDay() == WeekDays.Saturday || date.getDay() == WeekDays.Sunday
      );
   }

   @throttle()
   dataImport() {
      const isOk: HandlerFunction = (res: Response) => {
         if (res.ok) {
            return res;
         } else {
            throw new Error(res.statusText);
         }
      };

      this._negotiationService
         .getData(isOk)
         .then((negotiations) => {
            const importedNegotiations = this._negotiations.toArray();
            negotiations
               .filter(
                  (negotiation) =>
                     !importedNegotiations.some((data) =>
                        negotiation.isEqual(data)
                     )
               )
               .forEach((negotiation) => this._negotiations.add(negotiation));
         })
         .catch((err) => console.error(err));

      this._negotiationsView.update(this._negotiations);
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
