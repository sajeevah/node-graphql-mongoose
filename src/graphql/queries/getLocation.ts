import { ILocation, Location } from '../../models/location.model';

export const getLocation = async (): Promise<ILocation[]> => {
    try {
        const locationes: ILocation[] = await Location.find({ archived: false }).populate('country');
        return locationes;
    } catch (error) {
        console.error('error in getLocation : ', error);
        throw new Error(error);
    }
}