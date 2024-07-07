import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WebSocketConnectionResolverBase } from "./base/webSocketConnection.resolver.base";
import { WebSocketConnection } from "./base/WebSocketConnection";
import { WebSocketConnectionService } from "./webSocketConnection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WebSocketConnection)
export class WebSocketConnectionResolver extends WebSocketConnectionResolverBase {
  constructor(
    protected readonly service: WebSocketConnectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
