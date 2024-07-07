import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WebSocketConnectionService } from "./webSocketConnection.service";
import { WebSocketConnectionControllerBase } from "./base/webSocketConnection.controller.base";

@swagger.ApiTags("webSocketConnections")
@common.Controller("webSocketConnections")
export class WebSocketConnectionController extends WebSocketConnectionControllerBase {
  constructor(
    protected readonly service: WebSocketConnectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
