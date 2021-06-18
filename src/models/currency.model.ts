import { Schema, Document, model, Model } from 'mongoose';

export interface ICurrency extends Document {
    curreny_code: string;
    exchange_rate: number;
    archived: boolean;
}
const CurrencySchema: Schema = new Schema({
    curreny_code: { type: String, required: true },
    exchange_rate: { type: Number, required: true },
    archived: { type: Boolean, required: true, default: false },
});

export const Currency: Model<ICurrency> = model<ICurrency>('Currency', CurrencySchema);