import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const mySecretToken = "my-secret-token";

  const authReq = req.clone({
    headers: req.headers.set("Authorization", `Bearer ${mySecretToken}`)
  });

  return next(authReq);
};
