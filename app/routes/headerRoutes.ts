import express from "express";
import {checkHeaderData} from "../middleware/checkHeaderData"
const headerRoute = express.Router();
import { headerController } from "../controller/headerController";

headerRoute.post("/header",checkHeaderData.createHeader, headerController.createHeader);

headerRoute.get("/header", headerController.getHeader);

headerRoute.put("/header",headerController.updateHeader);

headerRoute.delete("/header", headerController.deleteHeader);

export { headerRoute };
