import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UpperCasePipe, CurrencyPipe } from '@angular/common';
import {PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl:'./produto.html',
  styleUrl: './produto.css',
})
//adiciona classe, variaveis e condicionais para o componente
export class Produto {
  //entrada de dados da lista produtos em lista-produtos
  @Input() nome: string = '';
  @Input() preco: number = 0;
  //saída de dados de selecionados para lista-produtos
  @Output() produtoSelecionado = new EventEmitter<string>();
  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }
}
