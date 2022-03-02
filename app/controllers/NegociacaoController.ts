import { DiaDaSemana } from '../enums/DiaDaSemana.js';
import { Negociacao } from '../models/Negociacao.js';
import { Negociacoes } from '../models/Negociacoes.js';
import { MensagemView } from '../views/MensagemView.js';
import { NegociacoesView } from '../views/NegociacoesView.js';

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');


    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = document.querySelector('#valor') as HTMLInputElement;
    }


    public adicionar(): void {
        const negociacao = Negociacao.criarDe(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        if (!this.diaUtil(negociacao.data)) {
            this._mensagemView.update('Apenas dias úteis são aceitos!', false);
            return;
        } 
            this._negociacoes.adicionar(negociacao)
            this.atualizarView();
            this.limparFormulario();

    }

    private limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus();
    }


    private atualizarView(): void {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociacao Adicionada com sucesso!');
    }

    private diaUtil(date: Date): boolean {
        return date.getDay() != DiaDaSemana.DOMINGO && date.getDay() != DiaDaSemana.SABADO;
    }
}