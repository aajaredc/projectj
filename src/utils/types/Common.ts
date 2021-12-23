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