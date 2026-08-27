import { TestBed } from '@angular/core/testing';


import { CorridaService } from '../../service/corrida-service';
import { Corrida } from '../../models/corrida';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('CorridaListaComponent', () => {
 let service : CorridaService
 let httpMock : HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      providers: [
        CorridaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    service = TestBed.inject(CorridaService)

    httpMock = TestBed.inject(HttpTestingController)
  });

  it('Resultado esperado é salvar a corrida', () => {
    const corrida: Corrida ={
      "id": 1,
      "descricao_corrida": "",
      "data_corrida": "",
      "distancia5km": false,
      "distancia10km": false,
      "distancia25km": false
    }
    service.salvarCorrida(corrida).subscribe(result =>{
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida')
   
    expect(requisicao.request.method).toBe('POST')
    requisicao.flush(corrida)
  })

  it('Resultado esperado a lista de corrida', () => {
    const corrida: Corrida[] =[{
      "id": 1,
      "descricao_corrida": "",
      "data_corrida": "",
      "distancia5km": false,
      "distancia10km": false,
      "distancia25km": false
    }]
    service.listarCorridas().subscribe(result =>{
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida')
   
    expect(requisicao.request.method).toBe('GET')
    requisicao.flush(corrida)
  })

  it('Resultado esperado a lista de corrida', () => {
    const corrida: Corrida ={
      "id": 1,
      "descricao_corrida": "",
      "data_corrida": "",
      "distancia5km": false,
      "distancia10km": false,
      "distancia25km": false
    }
    service.listarCorrida(1).subscribe(result =>{
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/1')
   
    expect(requisicao.request.method).toBe('GET')
    requisicao.flush(corrida)
  })

  it('Resultado esperado excluir corrida', () => {
    const corrida: Corrida ={
      "id": 1,
      "descricao_corrida": "",
      "data_corrida": "",
      "distancia5km": false,
      "distancia10km": false,
      "distancia25km": false
    }
    service.excluirCorrida(1).subscribe(result =>{
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/1')
   
    expect(requisicao.request.method).toBe('DELETE')
    requisicao.flush(corrida)
  })

  it('Resultado esperado alterar corrida', () => {
    const corrida: Corrida ={
      "id": 1,
      "descricao_corrida": "",
      "data_corrida": "",
      "distancia5km": false,
      "distancia10km": false,
      "distancia25km": false
    }
    service.alterarCorrida(corrida).subscribe(result =>{
      expect(result).toEqual(corrida)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/1')
   
    expect(requisicao.request.method).toBe('PUT')
    requisicao.flush(corrida)
  })

});
