import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvestimentoInterface } from '../interfaces/InvestimentoInterface';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoServiceService {

  private readonly API = 'http://investapi.test/api/';
  constructor(private http: HttpClient) { }

  getInvestimentos(): Observable<InvestimentoInterface[]>
  {
    const url = this.API + 'investimentos'
    return this.http.get<InvestimentoInterface[]>(url); 
  }

  getInvestimentoUnico(id: number): Observable<InvestimentoInterface>
  { 
    const url = this.API + 'investimento/'+id;
    return this.http.get<InvestimentoInterface>(url);
  }

  saveInvestimento(investimento: InvestimentoInterface): Observable<InvestimentoInterface>
  {
    const url = this.API + 'investimento/store';
    return this.http.post<InvestimentoInterface>(url , investimento);
  }
}
