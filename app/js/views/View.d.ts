declare class View<T> {
    protected _element: Element;
    constructor(selector: string);
    update(model: T): void;
    template(model: T): string;
}
