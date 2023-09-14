import express from "express";
import { settingController } from "../controller/settingController";
const settingRoute = express.Router();

settingRoute.post("/setting", settingController.createSetting);
settingRoute.get("/setting", settingController.getSetting);
settingRoute.put("/setting/:settingId",settingController.updateSetting);
settingRoute.delete("/setting",);

export { settingRoute };
