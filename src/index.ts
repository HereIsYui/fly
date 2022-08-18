import express from "express";
import { createServer } from "http";
import { UTILS } from "./utils/utils";
import { LOGGER } from './utils/logger';
import { R_KEY } from './utils/randomkey';
import { config } from "./config/config";
import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from "./utils/socket";
import { Server } from "socket.io";


const app = express();
const httpServer = createServer(app);
// Socket配置
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    socket.emit("basicEmit", 0, 'all', Buffer.from('Welcome to Fly!'));
    socket.on("basicInfo", (type, user, data) => {
        // ...
    });
});
app.use('/', express.static('../data'));

app.all('*', function (req, res, next) {
    //设为指定的域
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header("X-Powered-By", ' 3.2.1');
    next();
});
httpServer.listen(config.SOCKET_PORT);



// LOGGER.Succ(JSON.stringify(R_KEY.CreateExchangeCode(10, JSON.stringify({ y001: 2, i001: 100 }), new Date('2022-09-14 00:00:00').getTime().toString(), 0, "测试")))

// console.log(`道历：${UTILS.GetDaoTime()}年`)
// LOGGER.Warn("test")
/**
 * 数据库连接测试代码(暂时不用)
 */
//  import { init, exec, sql, transaction } from 'mysqls'
//  init(config.MYSQL);
// async function ServerInit() {
//     const sqlstr = sql.table('fly_dev_test').select()
//     const result = await exec(sqlstr.toString());
//     LOGGER.Succ(JSON.stringify(result));
// }
// ServerInit()