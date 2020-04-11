import { Printable } from './Printable';
import { EqualData } from './EqualData';

export interface Interfaces<T> extends Printable, EqualData<T> {}
