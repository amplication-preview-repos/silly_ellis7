import { WebSocketConnection as TWebSocketConnection } from "../api/webSocketConnection/WebSocketConnection";

export const WEBSOCKETCONNECTION_TITLE_FIELD = "connectionId";

export const WebSocketConnectionTitle = (
  record: TWebSocketConnection
): string => {
  return record.connectionId?.toString() || String(record.id);
};
