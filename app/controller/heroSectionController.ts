import { Request, Response } from "express";
import { helperFunction } from "../helper/commonFunction";
import { heroSectionService } from "../services/heroSectionService";
import { MESSAGES } from "../utils/messages";
import { heroSectionModel } from "../models/heroSectionModel";

interface HeroSectionController {
  createHeroSection: (req: Request, res: Response) => Promise<void>;
  getHeroSection: (req: Request, res: Response) => Promise<void>;
  updateHeroSection: (req: Request, res: Response) => Promise<void>;
  deleteHeroSection: (req: Request, res: Response) => Promise<void>;
}
interface POSTImageSchema {
  extension: string;
  imageUrl?: string;
  base64: string;
}
const heroSectionController: HeroSectionController = {
  createHeroSection: async (req, res) => {
    const payload = req.body;
    const heroSection = req.body.heroSection;
    const dataObj = {
      headerIcon: heroSection.base64,
      extension: heroSection.extension,
    };
    // console.log(isBase64(heroSection.base64))
    let heroSectionLogo;
    if (heroSection.base64) {
      heroSectionLogo = helperFunction.fileUpload(dataObj);
    } else {
      heroSectionLogo = req.body.heroSection.imageUrl;
    }
    const dataArr: any = [];
    payload.data.forEach((item: POSTImageSchema, index: number) => {
      if(index<4) {let fileName;
      let imageObj;
      if (item.base64) {
        dataObj.headerIcon = item.base64;
        dataObj.extension = item.extension;
        fileName = helperFunction.fileUpload(dataObj);
        imageObj = { imageUrl: fileName };
        dataArr.push(imageObj);
      } else {
        imageObj={imageUrl:item.imageUrl}
        dataArr.push(imageObj);
      }}

    });
    const heroSectionObj: any = {
      heroSection: {imageUrl:heroSectionLogo},
      data: dataArr,
    };
    await heroSectionModel.deleteMany({});
    const heroSectionCreated = await heroSectionService.createHeroSection(
      heroSectionObj
    );
    res
      .status(200)
      .json({ message: "success", heroSection: heroSectionCreated });
  },

  getHeroSection: async (req, res) => {
    try {
      const header = await heroSectionService.findOneHeroSection({});
      res.status(200).json(header);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: MESSAGES.INTERNAL_SERVER_ERROR });
    }
  },

  updateHeroSection: async (req, res) => {
    const payload = req.body;
    const dataObj = {
      headerIcon: "",
      extension: "",
    };
    if (payload.heroSectionLogo) {
      dataObj.headerIcon = payload.heroSectionLogo.imageUrl;
      dataObj.extension = payload.heroSectionLogo.extension;
      payload.heroSectionLogo = helperFunction.fileUpload(dataObj);
    }
    if (payload.clientLogo1) {
      dataObj.headerIcon = payload.clientLogo1.imageUrl;
      dataObj.extension = payload.clientLogo1.extension;
      payload.clientLogo1 = helperFunction.fileUpload(dataObj);
    }
    if (payload.clientLogo2) {
      dataObj.headerIcon = payload.clientLogo2.imageUrl;
      dataObj.extension = payload.clientLogo2.extension;
      payload.clientLogo2 = helperFunction.fileUpload(dataObj);
    }
    if (payload.clientLogo3) {
      dataObj.headerIcon = payload.clientLogo3.imageUrl;
      dataObj.extension = payload.clientLogo3.extension;
      payload.clientLogo3 = helperFunction.fileUpload(dataObj);
      console.log(payload.clientLogo3, "clientLogo=====");
    }
    if (payload.clientLogo4) {
      dataObj.headerIcon = payload.clientLogo4.imageUrl;
      dataObj.extension = payload.clientLogo4.extension;
      payload.clientLogo4 = helperFunction.fileUpload(dataObj);
      console.log(payload.clientLogo4, "clientLogo=====");
    }
    await heroSectionService.findOneAndUpdateHeroSection({}, { $set: payload });
    res.status(200).json({ message: MESSAGES.HERO_SECTION_UPDATED });
  },

  deleteHeroSection: async (req, res) => {
    await heroSectionService.findOneAndDeleteSection({});
    res.status(200).json({ message: MESSAGES });
  },
};

export { heroSectionController };
