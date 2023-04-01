export interface GDData {
    id: number, // 物品id
    name: string, // 物品名称
    type: number, // 物品分类 0灵石 1灵药 2灵药种子 3丹药 4装备 5道具
    price: number, // 物品价格-购买
    sell_price: number, // 物品价格-卖出
    level: number, // 物品品级
    desc: string, // 物品描述
    exp_add?: number,// 增加的经验
    golds_add?: number, // 增加的灵石
    golds_level?: number,// 灵石的等级 增加灵石的物品必填 0灵石 1中品灵石 2上品灵石 3极品灵石
    growth_time?: number, // 灵药种子的生长最短时间 单位秒 每超出一倍时间 品级上升一级 最高到极品 

}
export interface myGoods {
    [key: string]: GDData
}