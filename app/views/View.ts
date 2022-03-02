export abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {

        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`O seletor ${seletor} não existe!`);
        }

        if (escapar)
            this.escapar = escapar;
    }


    protected abstract template(model: T, alert?: boolean): string;

    public update(model: T, alert: boolean = true): void {
        let template = this.template(model, alert);

        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}