import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { InvestimentoInterface } from 'src/app/interfaces/InvestimentoInterface';
import { InvestimentoServiceService } from 'src/app/services/investimento-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  investimento: InvestimentoInterface ={
    id: 0,
    name: '',
    adicional: 0,
    valor: 0,
    date: '',
    total: 0
  }
  constructor(private router: Router , private service: InvestimentoServiceService) { }

  ngOnInit(): void {
  }

  salvar(){
    this.service.saveInvestimento(this.investimento).subscribe(() =>{
      this.router.navigate(['investimentos']);
    })
  }

  cancelar(){
    this.router.navigate(['investimentos']);
  }
}
