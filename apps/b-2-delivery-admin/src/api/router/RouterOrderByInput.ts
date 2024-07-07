import { SortOrder } from "../../util/SortOrder";

export type RouterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isConnected?: SortOrder;
  routerName?: SortOrder;
  macAddress?: SortOrder;
  signalStrength?: SortOrder;
};
