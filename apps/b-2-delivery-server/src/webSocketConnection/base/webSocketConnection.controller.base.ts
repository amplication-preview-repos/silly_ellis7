/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WebSocketConnectionService } from "../webSocketConnection.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WebSocketConnectionCreateInput } from "./WebSocketConnectionCreateInput";
import { WebSocketConnection } from "./WebSocketConnection";
import { WebSocketConnectionFindManyArgs } from "./WebSocketConnectionFindManyArgs";
import { WebSocketConnectionWhereUniqueInput } from "./WebSocketConnectionWhereUniqueInput";
import { WebSocketConnectionUpdateInput } from "./WebSocketConnectionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WebSocketConnectionControllerBase {
  constructor(
    protected readonly service: WebSocketConnectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WebSocketConnection })
  @nestAccessControl.UseRoles({
    resource: "WebSocketConnection",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWebSocketConnection(
    @common.Body() data: WebSocketConnectionCreateInput
  ): Promise<WebSocketConnection> {
    return await this.service.createWebSocketConnection({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        connectionId: true,
        status: true,
        message: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WebSocketConnection] })
  @ApiNestedQuery(WebSocketConnectionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WebSocketConnection",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async webSocketConnections(
    @common.Req() request: Request
  ): Promise<WebSocketConnection[]> {
    const args = plainToClass(WebSocketConnectionFindManyArgs, request.query);
    return this.service.webSocketConnections({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        connectionId: true,
        status: true,
        message: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WebSocketConnection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WebSocketConnection",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async webSocketConnection(
    @common.Param() params: WebSocketConnectionWhereUniqueInput
  ): Promise<WebSocketConnection | null> {
    const result = await this.service.webSocketConnection({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        connectionId: true,
        status: true,
        message: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WebSocketConnection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WebSocketConnection",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWebSocketConnection(
    @common.Param() params: WebSocketConnectionWhereUniqueInput,
    @common.Body() data: WebSocketConnectionUpdateInput
  ): Promise<WebSocketConnection | null> {
    try {
      return await this.service.updateWebSocketConnection({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          connectionId: true,
          status: true,
          message: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WebSocketConnection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WebSocketConnection",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWebSocketConnection(
    @common.Param() params: WebSocketConnectionWhereUniqueInput
  ): Promise<WebSocketConnection | null> {
    try {
      return await this.service.deleteWebSocketConnection({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          connectionId: true,
          status: true,
          message: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/websocket-status")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetWebSocketConnectionStatus(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.GetWebSocketConnectionStatus(body);
  }

  @common.Post("/initiate-websocket")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async InitiateWebSocketConnection(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.InitiateWebSocketConnection(body);
  }
}