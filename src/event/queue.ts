/**
 * 任务队列
 * Author：Yui
 * Create time：2023年04月01日
 * Modified on：2023年04月02日
 */
import { OnlineQueue, InteractQueue, JoinVipQueue, MsgQueue } from "../types/index";
// 在线玩家队列
export const online_queue: OnlineQueue = {};
// 修炼中的玩家队列
export const sleep_queue: InteractQueue[] = [];
// 地图历练的玩家队列
export const fight_queue: InteractQueue[] = [];
// 开通VIP队列
export const vip_queue: JoinVipQueue[] = [];
// 待发送的消息队列
export const msg_queue: MsgQueue[] = [];