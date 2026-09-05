/*import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
    providedIn: 'root',
})
export class AtletaService {
    private atletas: Pessoa[] = []

    adicionar (pessoa:Pessoa) {
      //armengue para gerar o id
        pessoa.id = this.atletas.length +1

        this.atletas.push(pessoa)
    }

    listar(){
       console.table(this.atletas)
        return this.atletas
    }

    private localizarAtleta(idAtleta: number){
        return this.atletas.findIndex(elem => elem.id === idAtleta)
    }

    remover(posicaoArray: number){
        this.atletas.splice(1,posicaoArray)
    }

    remover2(pessoa:Pessoa){
        this.atletas = this.atletas.filter(elem => elem.id ==pessoa.id)
    }

    alterar(pessoa : Pessoa){
        let posArray = this.localizarAtleta(pessoa.id)

        if(posArray >=0){
            this.atletas[posArray] = pessoa
        }
    }
}*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../models/pessoa';
@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  //DECLARAÇÃO CONSTRUTOR
  constructor(private http: HttpClient) { }

  //ADICIONAR NA API
  adicionarAtleta(atleta: Pessoa): Observable<Pessoa> {
    const urlApi = `http://127.0.0.1:8000/pessoa/`;

    return this.http.post<Pessoa>(urlApi, atleta);
  }

  //LISTAR ATLETAS NA API
  listarAtletas(): Observable<Pessoa[]> {
    const urlApi = `http://127.0.0.1:8000/pessoa/`;

    return this.http.get<Pessoa[]>(urlApi);
  }

  //LISTAR ATLETA
  listarAtleta(idAtleta: number):Observable<Pessoa>{
    const urlApi = `http://127.0.0.1:8000/pessoa/${idAtleta}`;

    return this.http.get<Pessoa>(urlApi);
  }

  //EXCLUIR NA API
  exluirAtleta(atleta: Pessoa): Observable<Pessoa> {
    const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`;

    return this.http.delete<Pessoa>(urlApi);
  }

  //ALTERAR NA API
  alterarAtleta(atleta: Pessoa):Observable<Pessoa>{
    const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`;

    return this.http.put<Pessoa>(urlApi, atleta);
  }

  calcularIdade(dataNascimento: string): number {
    if (!dataNascimento) return 0;
  
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
  
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
  
    return idade;
  }

  // Retorna uma string com a classificação do atleta
classificarIMC(peso: number, altura: number): string {
  // Evita divisão por zero ou valores inválidos
  if (!peso || !altura || altura <= 0) {
    return 'Dados inválidos';
  }

  // Cálculo do IMC (altura em metros, ex: 1.75)
  const imc = peso / (altura * altura);

  // Tabela padrão de classificação do IMC
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso ideal (Normal)';
  } else if (imc >= 25 && imc <= 29.9) {
    return 'Sobrepeso (Acima do peso)';
  } else if (imc >= 30 && imc <= 34.9) {
    return 'Obesidade Grau I';
  } else if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade Grau II';
  } else {
    return 'Obesidade Grau III';
  }
}

  /*
  private atletas: Pessoa[] = []

  adicionar(pessoa: Pessoa) {
    //ARRRRMENGUEEEE PARA GERAR O ID
    pessoa.id = this.atletas.length + 1
    
    this.atletas.push(pessoa)
  }

  listar() {
    console.table(this.atletas)
    return this.atletas
  }

  private localizarAtleta(idAtleta: number){
    return this.atletas.findIndex(elem => elem.id === idAtleta)
  }

  remover(posicaoArray: number){
    this.atletas.splice(1,posicaoArray)
  }

  remover2(pessoa: Pessoa){
    this.atletas = this.atletas.filter(elem => elem.id !== pessoa.id)
  }

  alterar(pessoa : Pessoa){
    let posArray = this.localizarAtleta(pessoa.id)

    if(posArray >=0){
      this.atletas[posArray] = pessoa
    }

  }*/

}

