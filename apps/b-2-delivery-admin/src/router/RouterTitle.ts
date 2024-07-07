import { Router as TRouter } from "../api/router/Router";

export const ROUTER_TITLE_FIELD = "routerName";

export const RouterTitle = (record: TRouter): string => {
  return record.routerName?.toString() || String(record.id);
};
