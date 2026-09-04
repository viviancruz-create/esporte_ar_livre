import { Component, OnInit, signal } from '@angular/core';
import { AtletaService } from '../../service/atleta-service';
import { Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atleta-lista-component',
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
  listarAtletas() {
    console.log("Iniciando requisição para listar atletas")
    this.http.listarAtletas()
      .subscribe({
        next: (dados) => {
          console.log("Dados recebidos da API:", dados)
          //this.listaAtletas = [...dados].sort((a, b) => a.nome.localeCompare(b.nome))
          this.listaAtletas.set([...dados].sort((a, b) => a.nome.localeCompare(b.nome)))
          console.log("Signal listaAtletas atualizado:", this.listaAtletas())
        },
        error: (msgErro) => {
          console.log("Erro ao cadastrar  o atleta ", msgErro)
        }

      })

  }

  // LISTAR OS ATLETAS (Calcula Idade, IMC e Classificação no Map)
 listaratleta() {
  this.http.listarAtletas()
    .subscribe({
      next: (dados) => {
        this.listaAtletas.set(
          dados.map(a => {
            // Garante altura em metros
            const altMetros = a.altura > 3 ? a.altura / 100 : a.altura;
            const calcImc = (a.peso > 0 && altMetros > 0) ? Number((a.peso / (altMetros * altMetros)).toFixed(2)) : 0;

            return {
              ...a,
              idade: a.data_nascimento ? String(new Date().getFullYear() - new Date(a.data_nascimento).getFullYear()) : '0',
              imc: calcImc,
              classificacaoImc: this.http.classificarIMC(a.peso, a.altura)
            };
          }).sort((a, b) => a.nome.localeCompare(b.nome))
        );
      },
      error: (msgErro) => {
        console.log("Erro ao listar os atletas: ", msgErro);
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
