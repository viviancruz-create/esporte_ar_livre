import { Component, OnInit, signal } from '@angular/core';
import { AtletaService } from '../../service/atleta-service';
import { Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atleta-lista-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css',
})
export class AtletaListaComponent implements OnInit{

  //DECLARAÇÃO ARRAY DO TIPO PESSOA
  //listaAtletas: Atleta[] = []
  listaAtletas = signal<Pessoa[]>([])

  //DECLARAÇÃO CONSTRUTOR
  constructor(private router: Router, private http: AtletaService) { }

  //EXECUTAR INSTRUÇÕES AO CARREGAR CRIAR O COMPONENTE
  ngOnInit() {
    this.listarAtletas()
  }

  //LISTAR OS ATLETAS
 // atleta-lista-component.ts

listarAtletas() {
  console.log("Iniciando requisição para listar atletas");
  this.http.listarAtletas().subscribe({
    next: (dados) => {
      console.log("Dados recebidos da API:", dados);

      // Aplica a classificação do IMC antes de atribuir ao Signal
      const dadosTratados = dados.map(atleta => ({
        ...atleta,
        imc: this.http.classificarIMC(atleta.peso, atleta.altura)
      }));

      // Ordena e atualiza o Signal
      this.listaAtletas.set(dadosTratados.sort((a, b) => a.nome.localeCompare(b.nome)));
    },
    error: (msgErro) => {
      console.error("Erro ao carregar a lista de atletas: ", msgErro);
    }
  });
}


  //EXCLUIR ATLETA
  excluirAtleta(atleta: Pessoa){
    if(confirm(`Deseja excluir ${atleta.nome} da competição? `)){
      this.http.exluirAtleta(atleta)
      .subscribe({
        next:(dados)=>{
           this.listaAtletas.update(elem =>
            elem.filter(a => a.id !== atleta.id)
          );
          
          console.log('Atleta excluído com Sucesso ', dados)
        },
        error: (msgErro) => {
          console.error("Erro ao Excluir  o atleta ", msgErro)
        }
      })

    }
   
  }

  //ALTERAR DADOS
  buscarPessoa(atleta: Pessoa){
    this.router.navigate(['/cadastroatleta', atleta.id])
  }


  calcularIdade(data_nascimento: string){
    return this.http.calcularIdade(data_nascimento)

  }

 

    
  

  
}//FIM COMPONENT AtletaListaComponent
