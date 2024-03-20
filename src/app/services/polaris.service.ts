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

  getAllEntities(): Observable<Entity[]> {
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

  getEntityById(id: number): Observable<Entity> {
    return this.http.get<any>(`${this.apiUrl}entities/${id}`).pipe(
      map(response => {
        return new Entity(
          response.id,
          response.description,
          response.qtyOrder,
          response.deliveryDate
        )
      })
    );

  }

  addEntity(newEntity: Entity): Observable<Entity> {
    return this.http.post<Entity>(`${this.apiUrl}entities`, newEntity);
  }

  updateEntity(id: number, updatedEntity: Entity): Observable<Entity> {
    return this.http.put<Entity>(`${this.apiUrl}entities/${id}`, updatedEntity);
  }
}
