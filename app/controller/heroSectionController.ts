import { Request, Response } from "express";
import { helperFunction } from "../helper/commonFunction";
import { heroSectionService } from "../services/heroSectionService";
import { MESSAGES } from "../utils/messages";

interface HeroSectionController {
  createHeroSection: (req: Request, res: Response) => Promise<void>;
  getHeroSection: (req: Request, res: Response) => Promise<void>;
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
    
    const heroSectionLogo = helperFunction.fileUpload(dataObj);
    
    let clientLogo1 = req.body.clientLogo1;
    dataObj.headerIcon = clientLogo1.imageUrl;
    dataObj.extension = clientLogo1.extension;
    clientLogo1 = helperFunction.fileUpload(dataObj);
    
    let clientLogo2 = req.body.clientLogo2;
    dataObj.headerIcon = clientLogo2.imageUrl;
    dataObj.extension = clientLogo2.extension;
    clientLogo2 = helperFunction.fileUpload(dataObj);

    let clientLogo3 = req.body.clientLogo3;
    dataObj.headerIcon = clientLogo3.imageUrl;
    dataObj.extension = clientLogo3.extension;
    clientLogo3 = helperFunction.fileUpload(dataObj);

    let clientLogo4 = req.body.clientLogo4;
    dataObj.headerIcon = clientLogo4.imageUrl;
    dataObj.extension = clientLogo4.extension;
    clientLogo4 = helperFunction.fileUpload(dataObj);

    const heroSectionObj:any = {
      heroSectionLogo: heroSectionLogo,
      clientLogo1: clientLogo1,
      clientLogo2: clientLogo2,
      clientLogo3: clientLogo3,
      clientLogo4: clientLogo4,
    };
    console.log(heroSectionObj,'hero section obj');
    await heroSectionService.createHeroSection(heroSectionObj);
    res.status(200).json({ message: MESSAGES.HERO_SECTION_CREATED });
  },
  getHeroSection: async (req, res) => {
    try {
      console.log("hello");
      const header = await heroSectionService.findOneHeroSection({});
      res.status(200).json(header);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: MESSAGES.INTERNAL_SERVER_ERROR });
    }
  },
  deleteHeroSection: async (req, res) => {
    const heroSectionId = req.params.heroSectionId;
    // await heroSectionService.
  },
};

export { heroSectionController };
