import { config } from "dotenv";

config(); 

export class ENV{
    public static readonly URL = process.env.URL ?? "Default";
    public static readonly PASSWORD = process.env.PASSWORD ?? "Default";
}