import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, of, tap } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable()
export class TestInterceptorInterceptor implements HttpInterceptor {

  constructor( private toastr: ToastrService , public api : ApiService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'Hello World'

    const TokenReq = request.clone({

      headers : request.headers.set('Authorization', `Token ${token}`),
      withCredentials : true

    })
   // console.log(request);
    
    
    return next.handle(TokenReq).pipe(
      tap((evt:any)=>{
        this.toastr.success('Connection Established',evt.success);
        //console.log(evt);
        this.api.loading.next(true)
        

      }), 
      finalize(
        ()=>{
          this.api.loading.next(false)
        }
      ),
      catchError((err:any)=>{

        if (err instanceof HttpErrorResponse) {

          this.toastr.error('Connection Failed',(err.status).toString());
          
        }

        
        return of (err);
        
      })
    );
  }
}
