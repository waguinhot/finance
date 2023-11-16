import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoricoInterface } from 'src/app/interfaces/HistoricoInterface';
import { InvestimentoInterface } from 'src/app/interfaces/InvestimentoInterface';
import { HistoricoService } from 'src/app/services/historico.service';
import { InvestimentoServiceService } from 'src/app/services/investimento-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  investimento: InvestimentoInterface = {
    id: 1,
    name: "",
    valor: 0,
    adicional: 0,
    total: 0,
    date: Date()
  }

  data: string = '';

  historico: HistoricoInterface[] = []
  constructor(
    private route: ActivatedRoute , 
    private router: Router , 
    private service: InvestimentoServiceService,
    private historicoService: HistoricoService
    ) { 

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getInvestimentoUnico(parseInt(id!)).subscribe((investimento) =>{
      this.investimento = investimento
      
      this.historicoService.buscarHistorico(investimento.id).subscribe((historico) =>{
        this.historico = historico
      })

    });

  }

}
