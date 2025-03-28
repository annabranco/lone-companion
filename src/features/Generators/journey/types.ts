export interface ForeignSettlementNamePart {
    [language: string]: string;
    english: string;
}

interface Variations {
    fs: string;
    fp: string; 
    ms: string;
    mp: string;
}

export interface LatinSettlementNameFirstPart {
    [language: string]: string;
    english: string;
    genderAndNumber: keyof Variations;
}

export interface LatinSettlementNameSecondPart {
    [key: string]: string | Variations | undefined;
    english: string;
    variations?: Variations;
}