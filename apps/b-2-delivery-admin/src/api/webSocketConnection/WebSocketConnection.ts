export type WebSocketConnection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  connectionId: string | null;
  status: string | null;
  message: string | null;
};
