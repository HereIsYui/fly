/**
 * 玩家事件
 * Author：Yui
 * Create time：2023年04月01日
 * Modified on：2023年04月02日
 */
import { Farm, Bag } from "../types/index";
export class User {
    uid: string;
    uname: string;
    is_busy: boolean = false;
    exp: number = 0;
    body: string = '';
    body_level: number = 0;
    bag: Bag[] = [];
    farm: Farm = {
        own: 4, // 已解锁的
        list: []
    };
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
        return this
    }
    addExp(exp: number) {
        this.exp = this.exp + Math.floor(exp);
    }
}