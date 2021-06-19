import { Country } from '../../models/country.model';
import { ILocation, Location } from '../../models/location.model';


export const setLocation = async (location: ILocation): Promise<ILocation> => {
    try {
        const locationModel = new Location(location);
        const savedLocation = await locationModel.save();
        if (savedLocation) {
            await Country.findByIdAndUpdate(location.country, { $push: savedLocation?._id }, { new: true });
        }
        return savedLocation
    } catch (error) {
        console.error('error in set location : ', error);
        throw new Error(error);
    }
}