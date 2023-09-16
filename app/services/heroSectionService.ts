import { FilterQuery, UpdateQuery } from "mongoose";
import {
  POSTJSON,
  heroSectionModel,
} from "../models/heroSectionModel";

interface HeroSectionService {
  createHeroSection: (
    payload: POSTJSON
  ) => Promise<POSTJSON | null>;
  findOneHeroSection: (
    searchQuery: FilterQuery<POSTJSON>
  ) => Promise<POSTJSON | null>;
  findOneAndUpdateHeroSection: (
    searchQuery: FilterQuery<POSTJSON>,
    updateQuery: UpdateQuery<POSTJSON>
  ) => Promise<POSTJSON | null>;
  findOneAndDeleteSection: (
    searchQuery: FilterQuery<POSTJSON>
  ) => Promise<POSTJSON | null>;
}
const heroSectionService: HeroSectionService = {
  createHeroSection: async (payload) => {
    return await heroSectionModel.create(payload);
  },

  findOneHeroSection: async (searchQuery) => {
    return await heroSectionModel.findOne(searchQuery);
  },

  findOneAndUpdateHeroSection:async(searchQuery,updateQuery)=> {
    return await heroSectionModel.findOneAndUpdate(searchQuery,updateQuery);
  },

  findOneAndDeleteSection: async (searchQuery) => {
    return await heroSectionModel.findOneAndDelete(searchQuery);
  },
};

export { heroSectionService };
