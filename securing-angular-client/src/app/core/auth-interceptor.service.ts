import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable, from } from "rxjs";

import { AuthService } from "./auth-service.component";
import { Constants } from "../constants";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private _auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(Constants.apiRoot)) {
      return from(
        this._auth.getAccessToken().then(token => {
          const headers = req.headers.set("Authorization", `Bearer ${token}`);
          const authReq = req.clone({ headers });
          return next.handle(authReq).toPromise();
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
