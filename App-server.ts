import express, { Response, Request } from "express";
import path from "path";
import getIndex from "./GETPOST/getIndex";
import getChart from "./GETPOST/getChart";

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

// json파일 사용 설정
app.use(express.json());

// 기본 도메인 주소 요청
app.use(getIndex)

// 차트데이터 가져오기 요청
app.use(getChart)


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
