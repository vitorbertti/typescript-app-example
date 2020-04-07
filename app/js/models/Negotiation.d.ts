export default class Negotiation {
    private _date;
    private _quantity;
    private _value;
    constructor(_date: Date, _quantity: number, _value: number);
    get date(): Date;
    get quantity(): number;
    get value(): number;
    get volume(): number;
}
