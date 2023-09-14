import { FilterQuery, UpdateQuery } from "mongoose";
import { HeaderDocument, headerModel } from "../models/headerModel";

interface HeaderService {
  createHeader: (payload: HeaderDocument) => Promise<HeaderDocument | null>;
  findOneheader: (
    searchQuery: FilterQuery<HeaderDocument>
  ) => Promise<HeaderDocument | null>;
  findOneAndUpdateHeader:(searchQuery:FilterQuery<HeaderDocument>,updateQuery:UpdateQuery<HeaderDocument>)=>Promise<HeaderDocument|null>;
  findOneAndDeleteHeader:(searchQuery:FilterQuery<HeaderDocument>)=>Promise<HeaderDocument|null>;
}

const headerService: HeaderService = {
  createHeader: async (payload) => {
    return await headerModel.create(payload);
  },

  findOneheader: async (searchQuery) => {
    return await headerModel.findOne(searchQuery);
  },

  findOneAndUpdateHeader:async(searchQuery)=>{
    return await headerModel.findOneAndUpdate(searchQuery);
  },
  findOneAndDeleteHeader:async(searchQuery)=> {
    return await headerModel.findOneAndDelete(searchQuery);
  }
};

export { headerService }
