/**
 * 事件调度
 * Author：Yui
 * Create time：2023年04月01日
 * Modified on：2023年04月02日
 */
import { GOODLIST } from "../data/goods";
import { User } from "./user";
import { online_queue, fight_queue, sleep_queue } from "./queue";
import { FarmItem } from "../types/index";
import dayjs from "dayjs";

// 玩家开始游戏
export const startGame = function (uid: string, uname: string) {
    const player = new User(uid, uname);
    online_queue[uname] = player.init();
    return online_queue[uname];
}

// 玩家地图历练
export const userFight = function (uid: string, uname: string) {
    if (online_queue[uname].is_busy) {
        return '已经在历练了'
    } else {
        fight_queue.push({ uid, join_time: dayjs().valueOf() });
        online_queue[uname].is_busy = true;
        return '已开始历练'
    }
}

// 玩家进入修炼队列
export const userSleep = function (uid: string, uname: string) {
    if (sleep_queue.find(e => { return e.uid === uid })) {
        return '已经开始修炼了'
    } else {
        sleep_queue.push({ uid, join_time: dayjs().valueOf() })
        return '已开始修炼'
    }
}

// 玩家种植作物
export const userSowing = function (uid: string, uname: string, farmId: string, goodId: string) {
    let playerData = online_queue[uname];
    let farmData = playerData.farm.list.find((e: FarmItem) => { return e.id === farmId });
    if (farmData) {
        if (farmData.good_id) {
            return '该土地已种植'
        } else {
            farmData.good_id = goodId;
            farmData.sowing_time = dayjs().valueOf();
            return '种植成功'
        }
    } else {
        return '该土地还未解锁'
    }
}
