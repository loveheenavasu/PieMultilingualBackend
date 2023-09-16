import dotenv from "dotenv";
import { dbConnect } from "./app/startup/dbConnect";
// import { PORT } from "./config";
import express, { Request, Response } from "express";
import { headerRoute, heroSectionRoute, menus, settingRoute } from "./app/routes";
import  cors  from "cors";
import path from "path";

dotenv.config();
const app = express();

app.use(express.json({ limit: '300mb' }));
app.use(express.static(path.join(__dirname, 'upload')));
app.use(cors<Request>());

app.use(headerRoute);

app.use(heroSectionRoute);

app.use(menus);

app.use(settingRoute)

dbConnect()
  .then((val) => {
    app.listen(process.env.PORT, () => {
      console.log("Port running at port no:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
