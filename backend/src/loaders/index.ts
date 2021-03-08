import expressLoader from "./express";
import { initializeDb } from "./typeorm";

export default async (expressApp:any) => {
    await initializeDb()
    await expressLoader({ app: expressApp.expressApp });

};
