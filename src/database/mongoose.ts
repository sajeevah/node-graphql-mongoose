import { connect, disconnect } from "mongoose";
import config from "../config";


const uri = config.MONGO_CONN_STRING;

export const dbConnection = (() : Promise<void> => {
    return new Promise((resolve, reject) => {
        connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
            if (err) {
              console.log(err.message);
              console.log(err);
              reject();
            }
            else {
              console.log('Connected to MongoDb');
              resolve();
            }
        });
    })
});


export const dbDisconnect = (() : Promise<void> => {
    return new Promise((resolve, reject) => {
        disconnect((err) => {
            if (err) {
              console.log(err.message);
              console.log(err);
              reject();
            }
            else {
              console.log('Disconnected to MongoDb');
              resolve();
            }
        });
    })
});