import { append } from '../common/append';
import { empty } from '../common/empty';
import { node } from '../common/node';
import { call } from '../common/call';
import { use } from '../common/use';

export class SubUnitArray extends Array {
  constructor(input) {
    super(input);
  }
}

SubUnitArray.prototype.append = append;
SubUnitArray.prototype.empty = empty;
SubUnitArray.prototype.node = node;
SubUnitArray.prototype.call = call;
SubUnitArray.prototype.use = use;
