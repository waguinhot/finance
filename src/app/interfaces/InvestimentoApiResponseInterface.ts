import { InvestimentoInterface } from "./InvestimentoInterface";

export interface InvestimentoApiResponseInterface {
    current_page: number
    data: InvestimentoInterface[]
    first_page: number
    last_page: number
    first_page_url: string
    last_page_url: string
}