import {SerieModele} from './serie.modele'

export interface EditionModele {
    title: string;
    author: string;
    publisher: number;
    collection: number;
    language: string;
    publishedDate: string;
    pages: number;
    cover: string;
    ISBN10: string;
    ISBN13: string;
    series?: Array<SerieModele>;
}