import View from './View';
import Negotiations from '../models/Negotiations';
export default class NegotiationsView extends View<Negotiations> {
    template(model: Negotiations): string;
}
