import express from "express";
import { settingController } from "../controller/settingController";
const settingRoute = express.Router();

settingRoute.post("/setting", settingController.createSetting);
settingRoute.get("/setting", settingController.getSetting);
settingRoute.put("/setting",);
settingRoute.delete("/setting",);

export { settingRoute };
