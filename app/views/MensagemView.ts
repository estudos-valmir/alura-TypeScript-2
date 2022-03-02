import { View } from './View.js';

export class MensagemView extends View<string>{


    protected template(model: string, sucesso: boolean = true): string {
        let tipoAlert = 'alert-info';

        if (!sucesso)
            tipoAlert = 'alert-warning';
        return `
            <p class="alert ${tipoAlert}">${model}</p>
        `;
    }
}