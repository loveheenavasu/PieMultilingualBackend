import { Document, FilterQuery, UpdateQuery } from "mongoose";
import { MenusDocument, menusModel } from "../models/menusModel";

interface Menus {
  createMenu: (payload: MenusDocument) => Promise<MenusDocument | null>;
  findOneMenu: (
    searchQuery: FilterQuery<MenusDocument>
  ) => Promise<MenusDocument | null>;
  findOneAndUpdateMenu: (
    searchQuery: FilterQuery<MenusDocument>,
    updateQuery: UpdateQuery<MenusDocument>
  ) => Promise<MenusDocument | null>;
  findOneAndDeleteMenu: (
    searchQuery: FilterQuery<MenusDocument>
  ) => Promise<MenusDocument | null>;
}

const menuServices: Menus = {
  createMenu: async (payload) => {
    return await menusModel.create(payload);
  },

  findOneMenu: async (searchQuery) => {
    return await menusModel.findOne(searchQuery);
  },

  findOneAndUpdateMenu:async(searchQuery,updateQuery)=> {
    return await menusModel.findOneAndUpdate(searchQuery,updateQuery);
  },
  findOneAndDeleteMenu: async (searchQuery) => {
    return await menusModel.findOneAndDelete(searchQuery);
  },
};

export { menuServices };
