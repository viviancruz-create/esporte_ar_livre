import { Component } from '@angular/core';
import { FormsModule } from '../../../../node_modules/@angular/forms/types/forms';
import { corridas } from '../../models/corrida';
import { CorridaService } from '../../service/corrida-service';

@Component({
  selector: 'app-cadastro-corrida-component',
  imports: [FormsModule],
  templateUrl: './cadastro-corrida-component.html',
  styleUrl: './cadastro-corrida-component.css',
})
export class CadastroCorridaComponent {
id = 0
descricao_corrida = ''
data_corrida = ''
distancia5km = false
distancia10km = false
distancia25km = false

constructor(private corridaService: CorridaService){}

dadosFormulario(){
  const corrida = new corridas ()
  corrida.descricao_corrida = this.descricao_corrida
  corrida.data_corrida = this.data_corrida
  corrida.distancia5km = this.distancia5km
  corrida.distancia10km = this.distancia10km
  corrida.distancia25km = this.distancia25km

  this.corridaService.salvarCorrida(corrida)

  this.limparAtributos()
}

limparAtributos(){
  this.descricao_corrida =''
  this.data_corrida =''
  this.distancia5km = false
  this.distancia10km =false
  this.distancia25km = false
}

}
