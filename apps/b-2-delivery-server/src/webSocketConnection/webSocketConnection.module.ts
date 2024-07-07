import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WebSocketConnectionModuleBase } from "./base/webSocketConnection.module.base";
import { WebSocketConnectionService } from "./webSocketConnection.service";
import { WebSocketConnectionController } from "./webSocketConnection.controller";
import { WebSocketConnectionResolver } from "./webSocketConnection.resolver";

@Module({
  imports: [WebSocketConnectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [WebSocketConnectionController],
  providers: [WebSocketConnectionService, WebSocketConnectionResolver],
  exports: [WebSocketConnectionService],
})
export class WebSocketConnectionModule {}
