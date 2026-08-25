import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pessoa } from '../../models/pessoa';
import { Corrida } from '../../models/corrida';
import { AtletaService } from '../../service/atleta-service';
import { CorridaService } from '../../service/corrida-service';

@Component({
  selector: 'app-inscricao-component',
<<<<<<< HEAD
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inscricao-component.html',
  styleUrl: './inscricao-component.css'
})
export class InscricaoComponent implements OnInit {

  // Listas para preencher os selects
  atletas: Pessoa[] = [];
  corridas: Corrida[] = [];

  // Propriedades do formulário (mudar no template via [(ngModel)])
  atletaSelecionadoId: number | null = null;
  cpfBusca: string = '';
  corridaSelecionadaId: number | null = null;
  distanciaSelecionada: string = '';
  tamanhoCamiseta: string = '';
  categoriaFaixaEtaria: string = 'Geral Masculino / 30-39 anos';
  valorInscricao: number = 89.90;
  aceitoTermos: boolean = false;

  constructor(
    private atletaService: AtletaService,
    private corridaService: CorridaService
  ) {}

  ngOnInit(): void {
    this.carregarAtletas();
    this.carregarCorridas();
  }

  carregarAtletas(): void {
    this.atletaService. listarAtletas().subscribe({
      next: (dados: Pessoa[]) => {
        this.atletas = dados;
      },
      error: (err: any) => console.error('Erro ao carregar atletas', err)
    });
  }

  carregarCorridas(): void {
    this.corridaService. listarCorridas().subscribe({
      next: (dados: Corrida[]) => {
        this.corridas = dados;
      },
      error: (err: any) => console.error('Erro ao carregar corridas', err)
    });
  }

  buscarPorCpf(): void {
    if (this.cpfBusca) {
      const cpfNumero = Number(this.cpfBusca);
      const encontrado = this.atletas.find(a => a.cpf === cpfNumero);
      
      if (encontrado) {
        this.atletaSelecionadoId = encontrado.id || null;
      } else {
        alert('Atleta não encontrado com este CPF!');
      }
    }
  }

  finalizarInscricao(): void {
    if (!this.aceitoTermos) {
      alert('Você precisa aceitar os termos do regulamento para prosseguir!');
      return;
    }

    const dadosInscricao = {
      atletaId: this.atletaSelecionadoId,
      corridaId: this.corridaSelecionadaId,
      distancia: this.distanciaSelecionada,
      tamanhoCamiseta: this.tamanhoCamiseta,
      valor: this.valorInscricao
    };

    console.log('Inscrição realizada:', dadosInscricao);
    alert('Inscrição realizada com sucesso! Redirecionando para pagamento...');
  }
}
=======
    standalone: true,
      imports: [FormsModule, CommonModule],
        templateUrl: './inscricao-component.html',
          styleUrl: './inscricao-component.css'
          })
          export class InscricaoComponent implements OnInit {

            // Listas para preencher os selects
              atletas: Pessoa[] = [];
                corridas: Corrida[] = [];

                  // Propriedades do formulário (mudar no template via [(ngModel)])
                    atletaSelecionadoId: number | null = null;
                      cpfBusca: string = '';
                        corridaSelecionadaId: number | null = null;
                          distanciaSelecionada: string = '';
                            tamanhoCamiseta: string = '';
                              categoriaFaixaEtaria: string = 'Geral Masculino / 30-39 anos';
                                valorInscricao: number = 89.90;
                                  aceitoTermos: boolean = false;

                                    constructor(
                                        private atletaService: AtletaService,
                                            private corridaService: CorridaService
                                              ) {}

                                                ngOnInit(): void {
                                                    this.carregarAtletas();
                                                        this.carregarCorridas();
                                                          }

                                                            carregarAtletas(): void {
                                                                this.atletaService.obterAtletas().subscribe({
                                                                      next: (dados: Pessoa[]) => {
                                                                              this.atletas = dados;
                                                                                    },
                                                                                          error: (err: any) => console.error('Erro ao carregar atletas', err)
                                                                                              });
                                                                                                }

                                                                                                  carregarCorridas(): void {
                                                                                                      this.corridaService.obterCorridas().subscribe({
                                                                                                            next: (dados: Corrida[]) => {
                                                                                                                    this.corridas = dados;
                                                                                                                          },
                                                                                                                                error: (err: any) => console.error('Erro ao carregar corridas', err)
                                                                                                                                    });
                                                                                                                                      }

                                                                                                                                        buscarPorCpf(): void {
                                                                                                                                            if (this.cpfBusca) {
                                                                                                                                                  const encontrado = this.atletas.find(a => a.cpf === this.cpfBusca);
                                                                                                                                                        if (encontrado) {
                                                                                                                                                                this.atletaSelecionadoId = encontrado.id || null;
                                                                                                                                                                      } else {
                                                                                                                                                                              alert('Atleta não encontrado com este CPF!');
                                                                                                                                                                                    }
                                                                                                                                                                                        }
                                                                                                                                                                                          }

                                                                                                                                                                                            finalizarInscricao(): void {
                                                                                                                                                                                                if (!this.aceitoTermos) {
                                                                                                                                                                                                      alert('Você precisa aceitar os termos do regulamento para prosseguir!');
                                                                                                                                                                                                            return;
                                                                                                                                                                                                                }

                                                                                                                                                                                                                    const dadosInscricao = {
                                                                                                                                                                                                                          atletaId: this.atletaSelecionadoId,
                                                                                                                                                                                                                                corridaId: this.corridaSelecionadaId,
                                                                                                                                                                                                                                      distancia: this.distanciaSelecionada,
                                                                                                                                                                                                                                            tamanhoCamiseta: this.tamanhoCamiseta,
                                                                                                                                                                                                                                                  valor: this.valorInscricao
                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                          console.log('Inscrição realizada:', dadosInscricao);
                                                                                                                                                                                                                                                              alert('Inscrição realizada com sucesso! Redirecionando para pagamento...');
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                
>>>>>>> 3e9f13831d4632370420c4d3eb58a222663cbe3a
