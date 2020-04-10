import { Printable } from '../models/index';

export function printLog(...objects: Printable[]) {
   objects.forEach((object) => object.addLog());
}
