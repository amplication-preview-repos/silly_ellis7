/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  WebSocketConnection as PrismaWebSocketConnection,
} from "@prisma/client";

export class WebSocketConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WebSocketConnectionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.webSocketConnection.count(args);
  }

  async webSocketConnections(
    args: Prisma.WebSocketConnectionFindManyArgs
  ): Promise<PrismaWebSocketConnection[]> {
    return this.prisma.webSocketConnection.findMany(args);
  }
  async webSocketConnection(
    args: Prisma.WebSocketConnectionFindUniqueArgs
  ): Promise<PrismaWebSocketConnection | null> {
    return this.prisma.webSocketConnection.findUnique(args);
  }
  async createWebSocketConnection(
    args: Prisma.WebSocketConnectionCreateArgs
  ): Promise<PrismaWebSocketConnection> {
    return this.prisma.webSocketConnection.create(args);
  }
  async updateWebSocketConnection(
    args: Prisma.WebSocketConnectionUpdateArgs
  ): Promise<PrismaWebSocketConnection> {
    return this.prisma.webSocketConnection.update(args);
  }
  async deleteWebSocketConnection(
    args: Prisma.WebSocketConnectionDeleteArgs
  ): Promise<PrismaWebSocketConnection> {
    return this.prisma.webSocketConnection.delete(args);
  }
  async GetWebSocketConnectionStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async InitiateWebSocketConnection(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}