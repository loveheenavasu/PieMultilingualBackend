import { Request, Response } from "express";
import { headerService } from "../services/headerService";
import { MESSAGES } from "../utils/messages";
import { helperFunction } from "../helper/commonFunction";

interface HeaderController {
  createHeader: (req: Request, res: Response) => Promise<void>;
  getHeader: (req: Request, res: Response) => Promise<void>;
  updateHeader: (req: Request, res: Response) => Promise<void>;
  deleteHeader: (req: Request, res: Response) => Promise<void>;
}
const headerController: HeaderController = {
  createHeader: async (req, res) => {
    try {
      const payload = req.body;
      const fileData = {
        headerIcon: payload.headerIcon,
        extension: payload.extension,
      };
      let filePath = helperFunction.fileUpload(fileData);
      payload.headerLogo = filePath;
      delete payload.extension;
      delete payload.headerIcon;
      const dataObj: any = [];
      payload.data.forEach((data: any) => {
        fileData.headerIcon = data.icon;
        fileData.extension = data.extension;
        filePath = helperFunction.fileUpload(fileData);
        data.icon = filePath;
        delete data.extension;
        dataObj.push(data);
      });
      payload.data = dataObj;
      await headerService.createHeader(payload);
      res.status(200).json({ message: MESSAGES.DATA_ADDED_SUCCESSFULLY });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: MESSAGES.INTERNAL_SERVER_ERROR });
    }
  },

  getHeader: async (req, res) => {
    try {
      const header = await headerService.findOneheader({});
      res.status(200).json(header);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: MESSAGES.INTERNAL_SERVER_ERROR });
    }
  },

  updateHeader: async (req, res) => {
    const headerId = req.params.headerId;
    const payload = req.body;
    const fileData = {
      headerIcon: payload.headerIcon,
      extension: payload.extension,
    };
    if (payload.headerLogo) {
      fileData.headerIcon = payload.headerLogo.icon;
      fileData.extension = payload.headerLogo.extension;
      payload.headerLogo = helperFunction.fileUpload(fileData);
      await headerService.findOneAndUpdateHeader(
        {},
        { $set: payload.headerLogo }
      );
    }
    const updateData = req.body;
    if (payload.headerId) {
        fileData.headerIcon = payload.data.icon;
      fileData.extension = payload.data.extension;
      payload.data = helperFunction.fileUpload(fileData);
      await headerService.findOneAndUpdateHeader(
        { "data._id": headerId },
        { $set: { "data._id": payload.data } }
      );
    }
    res.status(200).json({ message: MESSAGES.HEADER_UPDATED_SUCCESSFULLY });
  },

  deleteHeader: async (req, res) => {
    const headerId = req.params.headerId;
    await headerService.findOneAndDeleteHeader({ _id: headerId });
    res.status(200).json({ message: MESSAGES.HEADER_DELETED_SUCCESSFULLY });
  },
};

export { headerController };
