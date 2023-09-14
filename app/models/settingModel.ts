import mongoose from "mongoose";

export interface SettingDocument extends Document {
    searchBar:boolean;
}

const settingSchema=new mongoose.Schema<SettingDocument>({
    searchBar:{
        type:Boolean,
    },
});

export const settingModel=mongoose.model<SettingDocument>('setting',settingSchema);