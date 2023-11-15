import { Component, OnInit } from '@angular/core';
import { InvestimentoInterface } from 'src/app/interfaces/InvestimentoInterface';
import { InvestimentoServiceService } from 'src/app/services/investimento-service.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {


  listaInvestimentos: InvestimentoInterface[] = [
    
  ]
  constructor(private service: InvestimentoServiceService) { }

  ngOnInit(): void {
    this.service.getInvestimentos().subscribe((investimentos) =>{
      this.listaInvestimentos = investimentos
    })    
  }


}
