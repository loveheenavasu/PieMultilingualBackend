import mongoose, { Document } from "mongoose";

export interface MenusDocument extends Document {
  menus: string;
}

const menusSchema = new mongoose.Schema<MenusDocument>({
  menus: { type: String, required: true },
});

const menusModel = mongoose.model<MenusDocument>("menus", menusSchema);

export { menusModel };
