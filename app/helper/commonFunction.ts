import fs from "fs";
import path from "path";
interface HelperFunction {
  fileUpload: (payload: any) => false | string;
}
const helperFunction: HelperFunction = {
  fileUpload: (payload) => {
    if (!payload.headerIcon && !payload.extension) {
      return false;
    }
    const base64Data = payload.headerIcon;
    const base64Image = base64Data.split(";base64,").pop();
    const filename = `${Date.now()}_${Math.random()}.${payload.extension}`;
    const uploadDir = "./upload";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path.join(uploadDir, filename);
    const binaryData = Buffer.from(base64Image, "base64");
    fs.writeFileSync(filePath, binaryData);
    const imageUrl = `${filename}`;
    return imageUrl;
  },
};

export { helperFunction };
