import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth-interceptor.service";
import { AuthService } from "./auth-service.component";
import { ProjectService } from "./project.service";
import { AccountService } from "./account.service";
import { AdminRouteGuard } from "./admin-route-guard";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    ProjectService,
    AccountService,
    AdminRouteGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
