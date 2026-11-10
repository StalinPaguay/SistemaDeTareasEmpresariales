import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = 'TOKEN_JWT_DE_PRUEBA_12345';

  const solicitudClonada = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(solicitudClonada);
};
