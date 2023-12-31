import { Request, Response } from "express";
import { headerService } from "../services/headerService";
import { MESSAGES } from "../utils/messages";
import { helperFunction } from "../helper/commonFunction";
import { headerModel } from "../models/headerModel";

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

      let filePath = payload.headerIcon;

      if (payload.headerIconBase64) {
        filePath = helperFunction.fileUpload({
          headerIcon: payload.headerIconBase64,
          extension: payload.extension,
        });
      }

      payload.headerLogo = filePath;
      delete payload.extension;
      delete payload.headerIcon;
      const dataObj: any = [];
      (payload?.data || []).forEach((data: any) => {
        if (data?.base64) {
          console.log(data, 37);
          fileData.headerIcon = data.base64;
          fileData.extension = data.extension;
          filePath = helperFunction.fileUpload(fileData);
          if (!filePath) {
            res
              .status(400)
              .json({ message: "message invalid imagedata or extension" });
          }
          data.icon = filePath;
        }
        delete data.extension;
        dataObj.push(data);
      });
      payload.data = dataObj;
      //   const headerData=await headerService.findOneAndDeleteHeader({});
      await headerModel.deleteMany({});
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
    const payload = req.body;
    const fileData = {
      headerIcon: payload.headerIcon,
      extension: payload.extension,
    };
    if (payload.headerIcon) {
      fileData.headerIcon = payload.headerIcon;
      fileData.extension = payload.extension;
      const filePath = helperFunction.fileUpload(fileData);
      console.log(filePath);
      await headerService.findOneAndUpdateHeader(
        {},
        { $set: { headerLogo: filePath } }
      );
    }
    if (payload.data._id) {
      fileData.headerIcon = payload.data.icon;
      fileData.extension = payload.data.extension;
      payload.data.icon = helperFunction.fileUpload(fileData);
      console.log(payload.data);
      const headerSer = await headerService.findOneAndUpdateHeader(
        { "data.$._id": payload.data._id },
        {
          $set: {
            "data.$.name": payload.data.name,
            "data.$.link": payload.data.link,
            "data.$.icon": payload.data.icon,
          },
        }
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
