import mongoose, { Document } from "mongoose";

interface AdminDocument extends Document {
  email: string;
  password: string;
}

const adminSchema = new mongoose.Schema<AdminDocument>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const adminModel = mongoose.model<AdminDocument>(
  "adminPie",
  adminSchema
);
