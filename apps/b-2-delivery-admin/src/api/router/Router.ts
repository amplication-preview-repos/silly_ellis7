export type Router = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isConnected: boolean | null;
  routerName: string | null;
  macAddress: string | null;
  signalStrength: number | null;
};
