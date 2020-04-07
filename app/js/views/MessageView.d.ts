import View from './View';
export default class MessageView extends View<string> {
    template(model: string): string;
}
