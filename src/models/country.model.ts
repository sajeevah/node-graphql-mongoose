import { Schema, Document, model, Model, Types } from 'mongoose';
import { ILocation } from './location.model';

export interface ICountry extends Document {
    locations: Types.Array<ILocation['_id']>,
    name: string;
    code: string;
    archived: boolean;
}

const CountrySchema: Schema = new Schema({
    locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
    name: { type: String, required: true },
    code: { type: String, required: true },
    archived: { type: Boolean, required: true, default: false },
});

export const Country: Model<ICountry> = model<ICountry>('Country', CountrySchema);