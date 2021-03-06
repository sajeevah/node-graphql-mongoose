import { Currency, ICurrency } from '../../models/currency.model';

export const setCurrency = async (currency: ICurrency): Promise<ICurrency> => {
    try {
        const currencyModel = new Currency(currency);
        const savedCurrency: ICurrency = await currencyModel.save();
        return savedCurrency;
    } catch (error) {
        console.error('error in post Currencies : ', error);
        throw new Error(error);
    }
}