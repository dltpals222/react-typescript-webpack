import express, { Response, Request } from "express";
import path from "path";
import getIndex from "./GETPOST/getIndex";

const app = express();

app.use(
  express.static(path.join(__dirname, "dist"), {
    setHeaders: (res: Response, filePath: string) => {
      if (filePath.endsWith(".js")) {
        res.setHeader("content-type", "application/javascript");
      }
    },
  })
);

app.use(getIndex)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
