import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RouterModuleBase } from "./base/router.module.base";
import { RouterService } from "./router.service";
import { RouterController } from "./router.controller";
import { RouterResolver } from "./router.resolver";

@Module({
  imports: [RouterModuleBase, forwardRef(() => AuthModule)],
  controllers: [RouterController],
  providers: [RouterService, RouterResolver],
  exports: [RouterService],
})
export class RouterModule {}
