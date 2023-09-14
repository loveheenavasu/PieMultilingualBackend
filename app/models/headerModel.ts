import mongoose, { Document } from "mongoose";

export interface HeaderDocument extends Document {
  headerLogo: string;
  data: [
    {
      name: string;
      link: string;
      icon: string;
    }
  ];
}

const headerSchema = new mongoose.Schema<HeaderDocument>({
  headerLogo: {
    type: String,
    required: true,
  },
  data: [
    {
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  ],
});

export const headerModel = mongoose.model<HeaderDocument>(
  "header",
  headerSchema
);
