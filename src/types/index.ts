/**
 *
 */
export interface GDData {
  id: number; // 物品id
  name: string; // 物品名称
  type: number; // 物品分类 0灵石 1灵药 2灵药种子 3丹药 4装备 5道具
  price: number; // 物品价格-购买
  sell_price: number; // 物品价格-卖出
  level: number; // 物品品级
  desc: string; // 物品描述
  exp_add?: number; // 增加的经验
  golds_add?: number; // 增加的灵石
  golds_level?: number; // 灵石的等级 增加灵石的物品必填 0灵石 1中品灵石 2上品灵石 3极品灵石
  growth_time?: number; // 灵药种子的生长最短时间 单位秒 每超出一倍时间 品级上升一级 最高到极品
}
export interface Goods {
  [key: string]: GDData;
}

export interface MAPData {
  id: number; // 地图id
  name: string; // 地图名称
}

export interface NPCData {
  id: number; // npc id
  name: string; // npc名称
  map: string; // 所在地图，填写地图id
  task: string; // 任务，填写任务里的id
  fav: boolean; // 是否有好感度系统
  talk: string; // 填写对话信息id，多个用|隔开
  detail: string; // 背景故事 直接写
  lv: number; // 等级，数字
  lvFilter: string; // 等级，中文
  post: string; // 职位
}
