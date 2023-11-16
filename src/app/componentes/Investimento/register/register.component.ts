import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestimentoInterface } from 'src/app/interfaces/InvestimentoInterface';
import { InvestimentoServiceService } from 'src/app/services/investimento-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // investimento: InvestimentoInterface ={
  //   id: 0,
  //   name: '',
  //   adicional: 0,
  //   valor: 0,
  //   date: '',
  //   total: 0
  // }

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private service: InvestimentoServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required , Validators.pattern(/(.|\s)*\S(.|\s)*/) , Validators.minLength(3)])],
      valor: ['', Validators.compose([Validators.required , Validators.pattern(/(.|\s)*\S(.|\s)*/) , Validators.minLength(2)] )]
    })
  }

  salvar() {
    if (this.formulario.valid) {
      this.service.saveInvestimento(this.formulario.value).subscribe(() => {
        this.router.navigate(['investimentos']);
      })
    }

  }

  cancelar() {
    this.router.navigate(['investimentos']);
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return "bg-blue-800 pointer";
    }
    return "bg-gray-400"
  }
}
