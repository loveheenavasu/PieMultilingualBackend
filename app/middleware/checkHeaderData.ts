import { NextFunction, Request, Response } from "express";

interface CheckHeaderData {
  createHeader: (req: Request, res: Response, next: NextFunction) => any;
}

const checkHeaderData: CheckHeaderData = {
  createHeader: (req, res, next) => {
    const payload = req.body;
    if (!(payload.headerIcon || payload.headerIconBase64)) {
      return res.status(400).json({
        message:
          "message invalid imagedata or extension ---  header image issues ",
      });
    }
    payload.data.forEach((data: any) => {
      if (!(data.base64 || data.icon)) {
        return res.status(400).json({
          message: "message invalid imagedata or extension --- links issue  ",
        });
      }
    });
    next();
  },
};

export { checkHeaderData };
