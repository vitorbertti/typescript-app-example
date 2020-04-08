export declare abstract class View<T> {
    protected _element: Element;
    constructor(selector: string);
    update(model: T): void;
    abstract template(model: T): string;
}
