import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  //   historic: HistoricoInterface = {
  //     id: 0,
  //     id_investimento: 0,
  //     value: 0,
  //     date: ""

  // }

  historic!: FormGroup;


  historico: HistoricoInterface[] = []

  constructor(
    private route: ActivatedRoute , 
    private router: Router , 
    private service: InvestimentoServiceService,
    private historicoService: HistoricoService,
    private formBuilder: FormBuilder
    ) { 

  }

  ngOnInit(): void {

      this.historic = this.formBuilder.group({
        value : ['', Validators.compose([Validators.required , Validators.pattern(/(.|\s)*\S(.|\s)*/) , Validators.minLength(3) ])],
      })
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getInvestimentoUnico(parseInt(id!)).subscribe((investimento) =>{

      this.investimento = investimento

      this.historicoService.buscarHistorico(investimento.id).subscribe((historico) =>{
        this.historico = historico
      })

    });

  }

  salvar(){
    if(this.historic.valid)
    {
      this.historicoService.salvarHistorico(this.historic.value , this.investimento.id).subscribe(() =>{      
      this.ngOnInit();
      });
    }
   
  }

  validBtn(): string{
    if(this.historic.valid)
    {
      return "bg-red-500 pointer";
    }
    return "bg-gray-300";
  }

}
