import { WebSocketConnectionWhereInput } from "./WebSocketConnectionWhereInput";
import { WebSocketConnectionOrderByInput } from "./WebSocketConnectionOrderByInput";

export type WebSocketConnectionFindManyArgs = {
  where?: WebSocketConnectionWhereInput;
  orderBy?: Array<WebSocketConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
