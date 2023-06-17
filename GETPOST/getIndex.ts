import express, {Request, Response} from 'express'
import path from 'path'

const app = express();

const getIndex = app.get("/", (req: Request, res: Response) => {
  const indexPath = path.join(__dirname, "dist", "index.html");
  res.sendFile(indexPath);
});

export default getIndex;