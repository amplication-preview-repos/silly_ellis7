import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RouterService } from "./router.service";
import { RouterControllerBase } from "./base/router.controller.base";

@swagger.ApiTags("routers")
@common.Controller("routers")
export class RouterController extends RouterControllerBase {
  constructor(
    protected readonly service: RouterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
