import { setCurrency } from "./mutations/setCurrency";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const root = { 
    hello: () => 'Hello world!',
    setMessage: ( message: string ) => `${message}`,
    setCurrency: ( currency: unknown ) => setCurrency(JSON.parse(JSON.stringify(currency)).currency)
};