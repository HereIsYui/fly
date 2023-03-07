export interface NPCData {
  id: number, // npc id
  name: string, // npc名称
  map: string,  // 所在地图，填写地图id
  task: string, // 任务，填写任务里的id
  fav: boolean, // 是否有好感度系统
  talk: string, // 填写对话信息id，多个用|隔开
  detail: string, // 背景故事 直接写
  lv: number,     // 等级，数字
  lvFilter: string, // 等级，中文
  post: string     // 职位
}
