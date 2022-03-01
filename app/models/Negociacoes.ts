import { Negociacao } from './Negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];



    public adicionar(negociacao: Negociacao): void {

        this.negociacoes.push(negociacao);
    }

    public listar(): readonly Negociacao[] {
        return this.negociacoes;
    }
}