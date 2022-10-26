
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { ILista, IListPost, ISaveLista } from '../interface/lista.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  
  url : any;

  constructor(private http: HttpClient) { }
  
  list() {
    return this.http.get<ILista[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  listById(id : number) {
    return this.http.get<IListPost[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }

  save(values: ISaveLista) {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, values);
  }
 
}
