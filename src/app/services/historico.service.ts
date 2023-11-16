import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricoInterface } from '../interfaces/HistoricoInterface';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private readonly API = 'http://investapi.test/api/';
  constructor(private http: HttpClient) { }

  buscarHistorico(id: number):Observable<HistoricoInterface[]>{
    const url = this.API + 'historico/' + id;
    return this.http.get<HistoricoInterface[]>(url)
  }

  salvarHistorico(historico: HistoricoInterface , id: number):Observable<HistoricoInterface>{
    const url = this.API + 'historico/store/' + id;
    return this.http.post<HistoricoInterface>(url , historico);
  }
}
