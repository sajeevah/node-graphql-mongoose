import { Schema, Document, model, Model } from 'mongoose';
import { ICountry } from './country.model';

export interface ILocation extends Document {
    country: ICountry['_id'];
    locationName: string;
    place: string;
}

const LocationSchema: Schema = new Schema({
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    locationName: { type: String, required: true },
    place: { type: String },
});

export const Location: Model<ILocation> = model<ILocation>('Location', LocationSchema);