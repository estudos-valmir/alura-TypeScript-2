export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) { }

    public get volume(): number {
        return this.quantidade * this.valor;
    }

    public get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

}