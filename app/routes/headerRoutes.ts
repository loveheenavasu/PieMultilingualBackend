import express from "express";
const headerRoute = express.Router();
import { headerController } from "../controller/headerController";

headerRoute.post("/header", headerController.createHeader);

headerRoute.get("/header", headerController.getHeader);

headerRoute.put("/header",headerController.updateHeader);

headerRoute.delete("/header", headerController.deleteHeader);

export { headerRoute };
