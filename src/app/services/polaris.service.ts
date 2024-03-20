import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Entity } from '../models/entity.model';


@Injectable({
  providedIn: 'root',
})
export class PolarisService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEntities(): Observable<Entity[]> {
    return this.http.get<any>(`${this.apiUrl}/entities`).pipe(
      map(response => {
        return response.content.map((item: any) => new Entity(
          item.id,
          item.description,
          item.qtyOrder,
          item.deliveryDate
        ));
      })
    );
  }
}
