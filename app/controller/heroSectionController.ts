import { Request, Response } from "express";
import { helperFunction } from "../helper/commonFunction";
import { heroSectionService } from "../services/heroSectionService";
import { MESSAGES } from "../utils/messages";

interface HeroSectionController {
  createHeroSection: (req: Request, res: Response) => Promise<void>;
  getHeroSection: (req: Request, res: Response) => Promise<void>;
  updateHeroSection: (req: Request, res: Response) => Promise<void>;
  deleteHeroSection: (req: Request, res: Response) => Promise<void>;
}

const heroSectionController: HeroSectionController = {
  createHeroSection: async (req, res) => {
    const payload = req.body;
    const heroSection = req.body.heroSection;
    const dataObj = {
      headerIcon: heroSection.imageUrl,
      extension: heroSection.extension,
    };
    let clientLogo1;
    let clientLogo2;
    let clientLogo3;
    let clientLogo4;
    const heroSectionLogo = helperFunction.fileUpload(dataObj);
    payload.data.forEach((item: any, index: number) => {
      dataObj.headerIcon = item.imageUrl;
      dataObj.extension = item.extension;
      const fileName = helperFunction.fileUpload(dataObj);
      console.log(fileName);
      if (index == 0) {
        clientLogo1 = fileName;
      } else if (index == 1) {
        clientLogo2 = fileName;
      } else if (index == 2) {
        clientLogo3 = fileName;
      } else if (index == 3) {
        clientLogo4 = fileName;
      }
    });
    const heroSectionObj: any = {
      heroSectionLogo: heroSectionLogo,
      clientLogo1: clientLogo1,
      clientLogo2: clientLogo2,
      clientLogo3: clientLogo3,
      clientLogo4: clientLogo4,
    };
    await heroSectionService.findOneAndDeleteSection({});
    await heroSectionService.createHeroSection(heroSectionObj);
    res.status(200).json({ message: MESSAGES.HERO_SECTION_CREATED });
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
      console.log(payload.clientLogo3,"clientLogo=====");
    }
    if (payload.clientLogo4) {
      dataObj.headerIcon = payload.clientLogo4.imageUrl;
      dataObj.extension = payload.clientLogo4.extension;
      payload.clientLogo4 = helperFunction.fileUpload(dataObj);
      console.log(payload.clientLogo4,"clientLogo=====");
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
