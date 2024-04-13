import { MarkOptions } from "perf_hooks";
import { MapHTMLAttributes } from "react";

export interface Products {
    category: string,
    color: string,
    date: string,
    descontPercent: string,
    description: string,
    docDate: number,
    images: string[],
    keywords: string[],
    lastPrice: string,
    name: string,
    sizes: string[],
}