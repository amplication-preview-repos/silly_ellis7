import { RouterWhereInput } from "./RouterWhereInput";
import { RouterOrderByInput } from "./RouterOrderByInput";

export type RouterFindManyArgs = {
  where?: RouterWhereInput;
  orderBy?: Array<RouterOrderByInput>;
  skip?: number;
  take?: number;
};
