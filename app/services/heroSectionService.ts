import { FilterQuery, UpdateQuery } from "mongoose";
import {
  HeroSectionDocument,
  heroSectionModel,
} from "../models/heroSectionModel";

interface HeroSectionService {
  createHeroSection: (
    payload: HeroSectionDocument
  ) => Promise<HeroSectionDocument | null>;
  findOneHeroSection: (
    searchQuery: FilterQuery<HeroSectionDocument>
  ) => Promise<HeroSectionDocument | null>;
  findOneAndUpdateHeroSection: (
    searchQuery: FilterQuery<HeroSectionDocument>,
    updateQuery: UpdateQuery<HeroSectionDocument>
  ) => Promise<HeroSectionDocument | null>;
  findOneAndDeleteSection: (
    searchQuery: FilterQuery<HeroSectionDocument>
  ) => Promise<HeroSectionDocument | null>;
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
