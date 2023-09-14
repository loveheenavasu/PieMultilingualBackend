import express from "express";
const headerRoute = express.Router();
import { headerController } from "../controller/headerController";

headerRoute.post("/header", headerController.createHeader);

headerRoute.get("/header", headerController.getHeader);

headerRoute.put("/header",);

headerRoute.delete("/header/:headerId", headerController.deleteHeader);

export { headerRoute };
