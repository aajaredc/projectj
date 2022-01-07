import { Kanji, Word } from "./Api";

/**
 * Represents "digest" object with kanji and words for use with the daily feed
 * 
 * Usually length of 6: one for each grade
 */
export interface Digest {
    kanji: Kanji;
    word: Word;
}

/**
 * Color pallet
 */
export enum Colors {
    Pink = '#ff6b87',
    Yellow = '#fbf1a9',
    LightPink = '#ff99ac'
}

export declare type Color = Colors.Pink | Colors.Yellow | Colors.LightPink;