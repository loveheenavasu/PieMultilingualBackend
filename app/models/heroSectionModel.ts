import mongoose, { Document, ObjectId } from "mongoose";

export interface HeroSectionDocument extends Document {
  heroSectionLogo: string;
  clientLogo1: string;
  clientLogo2: string;
  clientLogo3: string;
  clientLogo4: string;
}

const heroSectionSchema = new mongoose.Schema<HeroSectionDocument>({
  heroSectionLogo: { type: String, required: true },
  clientLogo1: { type: String ,required:true},
  clientLogo2: { type: String ,required:true},
  clientLogo3: { type: String ,required:true},
  clientLogo4: { type: String ,requried:true},
});

export const heroSectionModel = mongoose.model<HeroSectionDocument>(
  "heroSectionModel",
  heroSectionSchema
);
