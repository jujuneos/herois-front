import { Heroi } from "./heroi";
import { Superpoder } from "./superpoder";

export interface HeroisSuperpoderes {
    heroiId: number;
    superpoderId: number;
    heroi: Heroi;
    superpoder: Superpoder;
}