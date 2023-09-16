import mongoose, { Document, Mongoose, ObjectId } from "mongoose";

interface POSTImageSchema {
  imageUrl: string;
}
export interface POSTJSON extends Document{
  heroSection: POSTImageSchema;
  data: Array<POSTImageSchema>;
}

const heroSectionSchema = new mongoose.Schema<POSTJSON>(
  {
    heroSection: { type: String ,required:true},
    data: [{imageUrl:{ type: String }}],
  },
  { timestamps: true }
);

const heroSectionModel=mongoose.model<POSTJSON>('heroSectionModel',heroSectionSchema);

export {heroSectionModel}