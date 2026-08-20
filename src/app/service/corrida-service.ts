import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corrida } from '../../models/corrida';
import { corridas } from '../models/corrida';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  constructor(private http: HttpClient) {}

  salvarCorrida(corrida: Corrida) {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    this.http.post<Corrida>(urlApi, corrida)
      .subscribe({
        next: (respostaAPI) => {
          return respostaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
  }

  listarCorridas(){
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    this.http.get<Corrida[]>(urlApi)
      .subscribe({
        next: (corridasAPI) => {
          return corridasAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
  }

listarCorrida(idCorrida: Number){
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    this.http.get<Corrida>(urlApi)
      .subscribe({
        next: (corridaAPI) => {
          return corridaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
    }

  excluirCorrida(idCorrida: Number){
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    this.http.delete<Corrida>(urlApi)
      .subscribe({
        next: (repostaAPI) => {
          return repostaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
  }

  alterarCorrida(corrida: Corrida){
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`;

    this.http.put<Corrida>(urlApi, corridas)
      .subscribe({
        next: (repostaAPI) => {
          return repostaAPI
        },
        error: (msgErro) => {
          return msgErro
        }
      })
  }
}
