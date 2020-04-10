import { NegotiationType, Negotiation } from '../models/index';

export class NegotiationService {
   getData(handler: HandlerFunction): Promise<Negotiation[]> {
      return fetch('http://localhost:8080/data')
         .then((responseHandler) => handler(responseHandler))
         .then((res) => res.json())
         .then((responseData: NegotiationType[]) =>
            responseData.map(
               (data) => new Negotiation(new Date(), data.quantity, data.value)
            )
         );
   }
}

export interface HandlerFunction {
   (res: Response): Response;
}
