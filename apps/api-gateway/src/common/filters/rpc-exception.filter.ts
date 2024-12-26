import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { Observable, throwError } from 'rxjs';

@Catch(RpcException)
export class RPCExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    const response = host.switchToHttp().getResponse();
    console.log(response);
    const status = 500;

    return throwError(() => ({
      statusCode: status,
      message: exception.message || 'Internal Server Error',
    }));
  }
}
