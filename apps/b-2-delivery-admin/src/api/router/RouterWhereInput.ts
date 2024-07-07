import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RouterWhereInput = {
  id?: StringFilter;
  isConnected?: BooleanNullableFilter;
  routerName?: StringNullableFilter;
  macAddress?: StringNullableFilter;
  signalStrength?: IntNullableFilter;
};
