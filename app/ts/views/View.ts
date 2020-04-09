import { logRuntime } from '../helpers/decorators/index';
export abstract class View<T> {
   protected _element: Element;
   private _avoidJs: boolean;

   constructor(selector: string, avoidJs: boolean = false) {
      this._element = <Element>document.querySelector(selector);
      this._avoidJs = avoidJs;
   }

   @logRuntime(false)
   update(model: T): void {
      let template = this.template(model);
      if (this._avoidJs)
         template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
      this._element.innerHTML = template;
   }

   abstract template(model: T): string;
}
