import { Component } from '@angular/core';
import { CorridaService } from '../../service/corrida-service';
import { corridas } from '../../models/corrida';
import { signal } from '../../../../node_modules/@angular/core/types/_chrome_dev_tools_performance-chunk';
@Component({
  selector: 'app-corrida-lista-component',
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css',
})
export class CorridaListaComponent {
  listaCorrida = signal<corridas[]>([])

  constructor(private corridaService: CorridaService){}

  ngOInit(){
    this.listar()
  }

  listar(){
    this.corridaService.listarCorridas()
    .subscribe({
      next: (dadosCorrida) =>{
        this.listaCorrida.set([...dadosCorrida])
      },
      error(): (msgErro) => {
        console.log(msgErro)
      }
      
    })
   
  }

  excluir(objCorrida: corridas){
    if(confirm('Deseja excluir a corrida'))
  }
}
