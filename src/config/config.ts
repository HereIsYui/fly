import { resolve } from 'path';

export const config = {
    // 开服时间
    GAME_START_TIME: 1659944183000,
    // 日志控制台打印开关
    LOG_PRINT_POWER: true,
    // 日志文件记录开关
    LOG_SAVE_POWER: true,
    // 日志文件位置
    LOG_SAVE_PATH: resolve(__dirname, '../log/'),
    // Socket端口
    SOCKET_PORT: 3000,
    // MySQL连接配置
    MYSQL: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'fly_dev',
        port: 3306,
    }
}