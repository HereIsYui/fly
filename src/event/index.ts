/**
 * 事件调度
 * Author：Yui
 * Create time：2023年04月01日
 * Modified on：2023年04月01日
 */
import { GOODLIST } from "../data/goods";
import { User } from "./user";
import { online_queue } from "./queue";

function startGame(uid: string, uname: string) {
    const newUser = new User(uid, uname);
    online_queue[uname] = newUser.init();
}