import { FilterQuery, UpdateQuery } from "mongoose";
import { SettingDocument, settingModel } from "../models/settingModel";

interface SettingService {
  createSetting: (payload: SettingDocument) => Promise<SettingDocument>;
  findOneSetting:(searchQuery:FilterQuery<SettingDocument>)=>Promise<SettingDocument|null>;
  findOneAndUpdateSetting: (
    searchQuery: FilterQuery<SettingDocument>,
    updateQuery: UpdateQuery<SettingDocument>
  ) => Promise<SettingDocument|null>;
  findOneAndDeleteSetting:(searchQuery:FilterQuery<SettingDocument>)=>Promise<SettingDocument|null>;
}
const settingService: SettingService = {
  createSetting: async (payload) => {
    return await settingModel.create(payload);
  },
  findOneSetting:async(searchQuery)=>{
    return await settingModel.findOne(searchQuery);
  },
  findOneAndUpdateSetting:async (searchQuery,updateQuery)=> {
    return await settingModel.findOneAndUpdate(searchQuery,updateQuery);
  },
  findOneAndDeleteSetting:async(searchQuery)=>{
    return await settingModel.findOneAndDelete(searchQuery);
  }
};

export { settingService };
