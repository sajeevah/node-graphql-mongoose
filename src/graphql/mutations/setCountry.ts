import { Country, ICountry } from '../../models/country.model';

export const setCountry = async (country: ICountry): Promise<ICountry> =>  {
    try {
        const countryModel = new Country(country);
        const savedCountry: ICountry = await countryModel.save();
        return savedCountry;
    } catch (error) {
        console.error('error in set Country : ', error);
        throw new Error(error);
    }
}