import { Document } from "mongoose";

interface AdminDocument extends Document {
    email:string;
    password:string;
}