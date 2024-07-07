import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebSocketConnectionServiceBase } from "./base/webSocketConnection.service.base";

@Injectable()
export class WebSocketConnectionService extends WebSocketConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
