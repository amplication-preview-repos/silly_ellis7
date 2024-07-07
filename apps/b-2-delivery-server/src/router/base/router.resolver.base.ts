/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Router } from "./Router";
import { RouterCountArgs } from "./RouterCountArgs";
import { RouterFindManyArgs } from "./RouterFindManyArgs";
import { RouterFindUniqueArgs } from "./RouterFindUniqueArgs";
import { CreateRouterArgs } from "./CreateRouterArgs";
import { UpdateRouterArgs } from "./UpdateRouterArgs";
import { DeleteRouterArgs } from "./DeleteRouterArgs";
import { RouterService } from "../router.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Router)
export class RouterResolverBase {
  constructor(
    protected readonly service: RouterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Router",
    action: "read",
    possession: "any",
  })
  async _routersMeta(
    @graphql.Args() args: RouterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Router])
  @nestAccessControl.UseRoles({
    resource: "Router",
    action: "read",
    possession: "any",
  })
  async routers(@graphql.Args() args: RouterFindManyArgs): Promise<Router[]> {
    return this.service.routers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Router, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Router",
    action: "read",
    possession: "own",
  })
  async router(
    @graphql.Args() args: RouterFindUniqueArgs
  ): Promise<Router | null> {
    const result = await this.service.router(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Router)
  @nestAccessControl.UseRoles({
    resource: "Router",
    action: "create",
    possession: "any",
  })
  async createRouter(@graphql.Args() args: CreateRouterArgs): Promise<Router> {
    return await this.service.createRouter({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Router)
  @nestAccessControl.UseRoles({
    resource: "Router",
    action: "update",
    possession: "any",
  })
  async updateRouter(
    @graphql.Args() args: UpdateRouterArgs
  ): Promise<Router | null> {
    try {
      return await this.service.updateRouter({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Router)
  @nestAccessControl.UseRoles({
    resource: "Router",
    action: "delete",
    possession: "any",
  })
  async deleteRouter(
    @graphql.Args() args: DeleteRouterArgs
  ): Promise<Router | null> {
    try {
      return await this.service.deleteRouter(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => [String])
  async GetRouters(
    @graphql.Args()
    args: string
  ): Promise<string[]> {
    return this.service.GetRouters(args);
  }

  @graphql.Mutation(() => String)
  async ScanRouters(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ScanRouters(args);
  }
}