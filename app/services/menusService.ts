import { Document, FilterQuery } from "mongoose";
import { MenusDocument, menusModel } from "../models/menusModel";

interface Menus {
    createMenu:(payload:MenusDocument)=>Promise<MenusDocument|null>;
    findOneMenu:(searchQuery:FilterQuery<MenusDocument>)=>Promise<MenusDocument|null>;
    findOneAndDeleteMenu:(searchQuery:FilterQuery<MenusDocument>)=>Promise<MenusDocument|null>;
}

const menuServices:Menus={
    createMenu:async(payload)=>{
        return await menusModel.create(payload);
    },

    findOneMenu:async(searchQuery)=> {
        return await menusModel.findOne(searchQuery);
    },
    
    findOneAndDeleteMenu:async(searchQuery)=> {
        return await menusModel.findOneAndDelete(searchQuery);
    }
}

export {menuServices};