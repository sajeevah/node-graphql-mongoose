import { Country, ICountry } from '../../models/country.model';

export const getCountry = async (): Promise<ICountry[]> => {
    try {
        const countries: ICountry[] = await Country.find({ archived: false }).populate('locations');
        return countries;
    } catch (error) {
        console.error('error in getCountry : ', error);
        throw new Error(error);
    }
}