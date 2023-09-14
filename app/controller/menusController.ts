import { Request, Response } from "express";
import { MESSAGES } from "../utils/messages";
import { Document } from "mongoose";
import { menuServices } from "../services/menusService";

interface MenusController {
  createMenus: (req: Request, res: Response) => Promise<void>;
  getMenus: (req: Request, res: Response) => Promise<void>;
  deleteMenus:(req:Request,res:Response)=>Promise<void>;
}

const menusController: MenusController = {

  createMenus: async (req, res) => {
    const payload = req.body;
    payload.menus = JSON.stringify(payload.menus);
    await menuServices.createMenu(payload);
    res.status(200).json({ message: MESSAGES.MENU_DATA_ADDED_SUCCESSFULLY });
  },

  getMenus: async (req, res) => {
    const menu = await menuServices.findOneMenu({});
    if (menu) {
      console.log(menu);
      const menuParse = JSON.parse(menu.menus);
      res.status(200).json(menuParse);
    }
  },
  deleteMenus:async(req,res)=> {
    const menusId=req.params.menuId;
    await menuServices.findOneAndDeleteMenu({_id:menusId});
    res.status(200).json({message:MESSAGES.MENU_DELETED_SUCCESSFULLY});
  }
};

export { menusController };
