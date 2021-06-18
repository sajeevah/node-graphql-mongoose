import { Currency, ICurrency } from "../../models/currency.model";

export const getCurrency = async (): Promise<ICurrency[]> => {
    try {
        const currencies: ICurrency[] = await Currency.find({ archived: false });
        return currencies;
    } catch (error) {
        console.error('error in getCurrency : ', error);
        return [];
    }
}