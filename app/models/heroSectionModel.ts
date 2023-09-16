import mongoose, { Document, Mongoose, ObjectId } from "mongoose";

interface POSTImageSchema {
  imageUrl: string;
}
export interface POSTJSON extends Document{
  heroSection: {imageUrl:POSTImageSchema};
  data: Array<POSTImageSchema>;
}

const heroSectionSchema = new mongoose.Schema<POSTJSON>(
  {
    heroSection: {imageUrl:{ type: String ,required:true}},
    data: [{imageUrl:{ type: String }}],
  },
  { timestamps: true }
);

const heroSectionModel=mongoose.model<POSTJSON>('heroSectionModel',heroSectionSchema);

export {heroSectionModel}