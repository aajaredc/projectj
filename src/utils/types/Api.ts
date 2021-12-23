/**
 * Data returned from KanjiAPI
 * 
 * /kanji/{kanji}
 */
export interface Kanji {
    readonly grade: number;
    readonly heisig_en: string;
    readonly jlpt: number;
    readonly kanji: string;
    readonly kun_readings: string[];
    readonly meanings: string[];
    readonly name_readings: string[];
    readonly on_readings: string[];
    readonly stroke_count: number;
    readonly unicode: string;
}

interface WordMeaning {
    readonly glosses: string[];
}

interface WordVariant {
    /**
     * Not sure what priorties is
     */
    readonly priorities: any[];
    readonly pronounced: string;
    readonly written: string;
}

/**
 * Data returned from KanjiAPI
 * 
 * /words/{kanji}
 */
export interface Word {
    readonly meanings: WordMeaning[];
    readonly variants: WordVariant[]
}