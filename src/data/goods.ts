/**
 * 物品列表
 * Author：Yui
 * Create time：2023年03月30日
 * Modified on：2023年04月01日
 */
import { Goods } from "../types/index";

export const GOODLIST: Goods = {
  // 灵石
  GD00001: {
    id: 1,
    name: "灵石",
    type: 0,
    price: 1,
    sell_price: 1,
    level: 0,
    desc: "基础货币，还可以用来修炼",
  },
  GD00002: {
    id: 2,
    name: "中品灵石",
    type: 0,
    price: 100,
    sell_price: 100,
    level: 1,
    desc: "中品灵石，比灵石稀有，100灵石可兑换1中品灵石",
  },
  GD00003: {
    id: 3,
    name: "上品灵石",
    type: 0,
    price: 10000,
    sell_price: 10000,
    level: 2,
    desc: "上品灵石，比中品灵石稀有，100中品灵石可兑换1上品灵石",
  },
  GD00004: {
    id: 4,
    name: "极品灵石",
    type: 0,
    price: 1000000,
    sell_price: 1000000,
    level: 3,
    desc: "极品灵石，非常稀有，100上品灵石可兑换1极品灵石",
  },
  // 灵药
  GD10000: {
    id: 10000,
    name: "聚灵草",
    type: 1,
    price: 10,
    sell_price: 10,
    level: 0,
    desc: "一阶草药，其可吸收大量灵气储存在根部，因此得名聚灵草，是炼制聚灵丹的主要材料",
  },
  GD10001: {
    id: 10001,
    name: "中品聚灵草",
    type: 1,
    price: 100,
    sell_price: 60,
    level: 1,
    desc: "百年左右的聚灵草，可炼制中品聚灵丹",
  },
  GD10002: {
    id: 10002,
    name: "上品聚灵草",
    type: 1,
    price: 1000,
    sell_price: 600,
    level: 2,
    desc: "千年左右的聚灵草，可炼制上品聚灵丹",
  },
  GD10003: {
    id: 10003,
    name: "极品聚灵草",
    type: 1,
    price: 10000,
    sell_price: 6000,
    level: 3,
    desc: "万年以上的聚灵草，可炼制极品聚灵丹",
  },
};
