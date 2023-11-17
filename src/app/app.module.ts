import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CardComponent } from './componentes/Investimento/card/card.component';
import { ListagemComponent } from './componentes/Investimento/listagem/listagem.component';
import { RegisterComponent } from './componentes/Investimento/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './componentes/Investimento/view/view.component';
import { BotaoCarregarMaisComponent } from './componentes/Investimento/listagem/botao-carregar-mais/botao-carregar-mais.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ListagemComponent,
    RegisterComponent,
    ViewComponent,
    BotaoCarregarMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
