import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TypeSirop } from '../model/typeSirop.model';

@Injectable({
  providedIn: 'root'
})
export class TypeSiropService {

  private baseUrl = "http://localhost:8080"
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) { }

  getAllTypes() {
    return this.httpClient.get<TypeSirop[]>(this.baseUrl + '/types');
  }

}
