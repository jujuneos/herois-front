import { HeroisSuperpoderes } from "./heroisSuperpoderes";

export interface Heroi{
    id: number;
    nome: string;
    nomeHeroi: string;
    dataNascimento: Date;
    altura: number;
    peso: number;
    superpoderes: HeroisSuperpoderes[];
    mostrarPoderes: boolean;
}