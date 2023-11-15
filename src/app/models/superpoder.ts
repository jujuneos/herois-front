import { HeroisSuperpoderes } from "./heroisSuperpoderes";

export interface Superpoder {
    id: number;
    superpoder: string;
    descricao: string;
    herois: HeroisSuperpoderes[];
}