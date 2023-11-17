import { Component, OnInit } from '@angular/core';
import { InvestimentoInterface } from 'src/app/interfaces/InvestimentoInterface';
import { InvestimentoServiceService } from 'src/app/services/investimento-service.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {


  listaInvestimentos: InvestimentoInterface[] = [ ]
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  paginaAtual: number = 1;
  constructor(private service: InvestimentoServiceService) { }

  ngOnInit(): void {
    this.service.getInvestimentos(this.paginaAtual , this.filtro).subscribe((investimentos) =>{
      this.listaInvestimentos = investimentos.data
    })    
  }

  carregarMaisPensamentos(){
    this.service.getInvestimentos(++this.paginaAtual , this.filtro)
    .subscribe((lista) =>{
      this.listaInvestimentos.push(...lista.data)
      if(!this.listaInvestimentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisar(){
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.getInvestimentos(this.paginaAtual , this.filtro).subscribe(
      lista => {
        this.listaInvestimentos = lista.data;
      }
    )
  }

}
