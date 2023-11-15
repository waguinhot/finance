import { Component, Input, OnInit } from '@angular/core';
import { InvestimentoInterface } from 'src/app/interfaces/InvestimentoInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() investimento: InvestimentoInterface = {
    id: 1,
    name: "",
    valor: 0,
    adicional: 0,
    total: 0,
    date: Date()
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
