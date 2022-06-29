import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://rbhportal.com:8089/rbh_mi_report_index';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get(this.url+'/report_index_data').toPromise();
  }

  getDataByID(id: number): any {
    return this.http.get(this.url+'/report_index_data/'+id).toPromise();
  }

  saveData(data: any) {
    return this.http.post(this.url+'/report_index_data', data).toPromise();
  }
  

  updateData(id : any, data : any) {
    return this.http.put(this.url+'/report_index_data/'+ id, data).toPromise();
  }

  deleteData(id: number){
    return this.http.delete(this.url+'/report_index_data/'+id).toPromise();
  }

  addModule(data: any) {
    return this.http.post(this.url+'/report_index_module', data).toPromise();
  }

  deleteModule(id: number) {
    return this.http.delete(this.url+'/report_index_module/'+id).toPromise();
  }

  getModuleAll(): any {
    return this.http.get(this.url+'/report_index_module').toPromise();
  }
}
