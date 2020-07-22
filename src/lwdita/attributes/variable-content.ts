import { CDATA, isOrUndefined, isCDATA } from "../utils";

export const VariableContentFields = ['keyref'];
export interface VariableContentAttributes {
  'keyref'?: CDATA;
}
export const isVariableContentAttributes = (value?: any): value is VariableContentAttributes =>
  typeof value === 'object' &&
  isOrUndefined(isCDATA, value['keyref']);
