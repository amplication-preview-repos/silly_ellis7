import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WebSocketConnectionWhereInput = {
  id?: StringFilter;
  connectionId?: StringNullableFilter;
  status?: StringNullableFilter;
  message?: StringNullableFilter;
};
