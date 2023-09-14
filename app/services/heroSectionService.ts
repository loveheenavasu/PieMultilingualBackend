import { FilterQuery } from "mongoose";
import {  HeroSectionDocument, heroSectionModel } from "../models/heroSectionModel";

interface HeroSectionService {
    createHeroSection:(payload:HeroSectionDocument)=>Promise<HeroSectionDocument|null>;
    findOneHeroSection:(searchQuery:FilterQuery<HeroSectionDocument>)=>Promise<HeroSectionDocument|null>;
   // findOneAndDeleteSection:(searchQuery:FilterQuery<HeroSectionDocument>)=
}
const heroSectionService:HeroSectionService={
    createHeroSection:async(payload)=>{
        return await heroSectionModel.create(payload);
    },
    
    findOneHeroSection:async(searchQuery)=>{
        return await heroSectionModel.findOne(searchQuery);
    }
}

export {heroSectionService};