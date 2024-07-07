import { SortOrder } from "../../util/SortOrder";

export type WebSocketConnectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  connectionId?: SortOrder;
  status?: SortOrder;
  message?: SortOrder;
};
