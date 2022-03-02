export class Utilitario {

    public static obterDiaSemana(date: Date): string {
        return date.toLocaleDateString('en-US', {weekday: 'long' });
    }
}