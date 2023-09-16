import { NextFunction, Request, Response } from "express";

interface CheckHeaderData {
    createHeader:(req:Request,res:Response,next:NextFunction)=>any;

}

const checkHeaderData:CheckHeaderData= {
    createHeader:(req,res,next)=> {
        const payload=req.body;
        if(!payload.headerIcon||!payload.extension) {
            return res.status(400).json({message:"message invalid imagedata or extension"});
        }
        payload.data.forEach((data: any) => {
            if(!data.headerIcon||!data.extension) {
                return res.status(400).json({message:"message invalid imagedata or extension"});
            }
        })
        next();
    }
}

export {checkHeaderData};