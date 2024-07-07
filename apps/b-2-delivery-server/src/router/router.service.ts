import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RouterServiceBase } from "./base/router.service.base";

@Injectable()
export class RouterService extends RouterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
