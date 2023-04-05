// 物品相关
export interface GDData {
  id: number; // 物品id
  name: string; // 物品名称
  type: number; // 物品分类 0货币 1灵药 2灵药种子 3丹药 4装备 5道具[道具需要机缘or天命购买] 6功法
  price: number; // 物品价格-购买
  sell_price: number; // 物品价格-卖出
  level: number; // 物品品级
  desc: string; // 物品描述
  exp_add?: number; // 增加的经验
  golds_add?: number; // 增加的货币
  golds_level?: number; // 货币的等级 增加货币的物品必填 0灵石 1中品灵石 2上品灵石 3极品灵石 4机缘 5天命 6鸿蒙造化玉
  growth_time?: number; // 灵药种子的生长最短时间 单位秒 每超出一倍时间 品级上升一级 最高到极品
}
export interface Goods {
  [key: string]: GDData;
}

// 地图相关
export interface MAPData {
  id: number; // 地图id
  name: string; // 地图名称
  npc_id: string; // npc的id，多个用|隔开
}

export interface MapS {
  [key: string]: MAPData;
}

// NPC相关
export interface NPCData {
  id: number; // npc id
  name: string; // npc名称
  task: string; // 任务，填写任务里的id
  has_fav: boolean; // 是否有好感度系统
  fav?: number; // 好感度
  talk: string; // 填写对话信息id，多个用|隔开
  detail: string; // 背景故事 直接写
  lv: number; // 等级，数字
  lv_filter: string; // 等级，中文
  post: string; // 职位
}

export interface Npc {
  [key: string]: NPCData;
}

// 队列相关
export interface OnlineQueue {
  [key: string]: any
}

export interface InteractQueue {
  uid: string,
  join_time: number
}
export interface JoinVipQueue {
  uid: string,
  vip_level: number
}
export interface MsgQueue {
  uid: string,
  message: string
}

// 玩家相关
export interface Bag {
  id: string, // 物品id
  num: number // 物品数量
}

export interface Farm {
  own: number, // 已解锁的土地
  list: FarmItem[] // 种植物品列表
}
export interface FarmItem {
  id: string, // 土地id
  good_id: string, // 种植的物品id
  sowing_time: number // 种植的时间
}
export interface Pet {
  id: string,  // 宠物id
  name: string, // 宠物名称
  nick_name: string, // 宠物昵称
  level: number, // 宠物等级
  hunger: number, // 饥饿值
  fav: number, // 好感度
}