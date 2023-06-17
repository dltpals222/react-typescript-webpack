import * as mariadb from 'mariadb'

const mariaDBConfig : mariadb.PoolConfig = {
  user : "root",
  password : "1q2w3e4r",
  database : "aitrading_db",
  host : "localhost",
}

const pool = mariadb.createPool(mariaDBConfig)


export async function connectToMariaDB():Promise<mariadb.PoolConnection|void> {
  try {
    const connection = await pool.getConnection();
    console.log("MariaDB 연결 성공");
    return connection;
  } catch (error) {
    if(error) {
      console.error("MariaDB 연결 실패",error);
      throw error;
    }
  }

}

export async function runQuery (connectToMariaDB:mariadb.PoolConnection,query:string ) : Promise<any> {
  try{
    const result = await connectToMariaDB.query(query)
    return result;
  } catch (error) {
    console.error("쿼리 실행 에러" , error)
    throw error;
  } finally {
    connectToMariaDB.release()
  }
}