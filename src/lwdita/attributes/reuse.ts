import { NMTOKEN, CDATA, isOrUndefined, isCDATA } from "../utils";

export const ReuseFields = ['id', 'conref'];
export interface ReuseAttributes {
  'id'?: NMTOKEN;
  'conref'?: CDATA;
}
export const isReuseAttributes = (value?: any): value is ReuseAttributes =>
  isOrUndefined(isCDATA, value['id']) &&
  isOrUndefined(isCDATA, value['conref']);
