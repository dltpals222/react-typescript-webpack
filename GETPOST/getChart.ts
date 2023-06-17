import express, {Request, Response} from "express"
import { PoolConnection } from "mariadb";
import { connectToMariaDB, runQuery } from "../src/controller/mariadb";

const app = express();

const getChart = () => {
  app.get("/api/chart" ,async (req : Request, res:Response)=>{
    let connection : PoolConnection | undefined;
    try{
      connection = await connectToMariaDB();
      const query : string = `select * from kospi_005930_d order by day desc limit 60` 
      const result = await runQuery(connection, query)
      res.json(result)
    } catch (error) {
      console.error("MariaDB에서 데이터를 가져오는데 실패하였습니다.",error)
      res.status(500).json({error : "차트 데이터 에러 발생"})
    } finally {
      if(connection){
        connection.end()
      }
    }
  })
}

export default getChart