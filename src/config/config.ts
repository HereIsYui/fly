/**
 * 配置文件
 * Author：Yui
 * Create time：2022年08月15日
 * Modified on：2023年03月06日
 */
import { resolve } from 'path';

export const config = {
    // 开服时间
    GAME_START_TIME: 1678070040572,
    // 日志控制台打印开关
    LOG_PRINT_POWER: true,
    // 日志文件记录开关
    LOG_SAVE_POWER: true,
    // 日志文件位置
    LOG_SAVE_PATH: resolve(__dirname, '../log/'),
    // Socket端口
    SOCKET_PORT: 3001,
    // MySQL连接配置
    MYSQL: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'fly_dev',
        port: 3306,
    },
    // 卡密长度配置(不包括开头)
    KEY_LEN: 10,
    // 卡密默认开头
    KEY_START_BY: "FLY-"
}