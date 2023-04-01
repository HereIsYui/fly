/**
 * 玩家事件
 * Author：Yui
 * Create time：2023年04月01日
 * Modified on：2023年04月01日
 */
import { MyObject } from "../types/index";
export class User {
    uid: string;
    uname: string;
    is_busy?: boolean = false;
    exp: number = 0;
    body: string = '';
    body_level: number = 0;
    bag: MyObject[] = [];
    constructor(uid: string, uname: string) {
        this.uid = uid;
        this.uname = uname;
    }
    // 开始游戏
    init() {
        // 设置随机灵根
        this.body = ["金", "木", "水", "火", "土"][Math.floor(Math.random() * 4 + 1)];
        // 添加初始道具
        this.bag.push({ id: 'GB00001', num: 100 });
        // other 还没想好
    }
    toFight() {
        if (this.is_busy) {
            return 0
        }
        this.is_busy = true;
        return 1
    }
    toSleep() {
        if (this.is_busy) {
            return 0
        }
        this.is_busy = true;
        this.addExp(100);
        return 1
    }
    addExp(exp: number) {
        this.exp = this.exp + Math.floor(exp);
    }
}