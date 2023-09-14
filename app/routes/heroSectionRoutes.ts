import express from "express";
import { heroSectionController } from "../controller/heroSectionController";
const heroSectionRoute = express.Router();

heroSectionRoute.post("/heroSection", heroSectionController.createHeroSection);
heroSectionRoute.get("/heroSection", heroSectionController.getHeroSection);
heroSectionRoute.put("/heroSection");
heroSectionRoute.delete("/heroSection",);

export { heroSectionRoute };
