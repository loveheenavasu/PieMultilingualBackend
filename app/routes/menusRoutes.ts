import express from "express";
import {menusController} from "../controller/menusController"
const menus=express.Router();
menus.post('/menus',menusController.createMenus);
menus.get('/menus',menusController.getMenus);
menus.put('/menus',menusController.updateMenu);
menus.delete('/menu',menusController.deleteMenus);

export {menus};