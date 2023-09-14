import { Request, Response } from "express";
import { settingService } from "../services/settingService";
import { MESSAGES } from "../utils/messages";

interface SettingController {
  createSetting: (req: Request, res: Response) => Promise<void>;
  getSetting: (req: Request, res: Response) => Promise<void>;
  updateSetting: (req: Request, res: Response) => Promise<void>;
}

const settingController: SettingController = {
  createSetting: async (req, res) => {
    const payload = req.body;
    await settingService.createSetting(payload);
    res.status(200).json({ message: MESSAGES.SETTING_CREATED_SUCCESSFULLY });
  },

  getSetting: async (req, res) => {
    const data = await settingService.findOneSetting({});
    res.status(200).json(data);
  },

  updateSetting: async (req, res) => {
    const settingId = req.params.settingId;
    const payload = req.body;
    await settingService.findOneAndUpdateSetting(
      { _id:settingId },
      { $set: {searchBar:payload.searchBar} }
    );
    res.status(200).json({ message: MESSAGES.SETTING_UPDATED_SUCCESSFULLY });
  },
};
export { settingController };
