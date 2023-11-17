import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvestimentoInterface } from '../interfaces/InvestimentoInterface';
import { HistoricoInterface } from '../interfaces/HistoricoInterface';
import { InvestimentoApiResponseInterface } from '../interfaces/InvestimentoApiResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoServiceService {

  private readonly API = 'http://investapi.test/api/';

 
  constructor(private http: HttpClient) { }

  getInvestimentos(pagina: number): Observable<InvestimentoApiResponseInterface>
  {
    const itensPagina = 6;

    let params = new HttpParams().set('page' , pagina);

    //.set('limit' , itensPagina)



    const url = this.API + 'investimentos';
    return this.http.get<InvestimentoApiResponseInterface>(url , {params: params}); 
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
