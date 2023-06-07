import express, { Response, Request } from "express";
import path from "path";

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

app.get("/", (req: Request, res: Response) => {
  const indexPath = path.join(__dirname, "dist", "index.html");
  res.sendFile(indexPath);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
