import type { IconName } from '../components/ui/Icon';

export interface NavItem {
  path: string;
  label: string;
  icon: IconName;
  description: string;
}

export const primaryNav: NavItem[] = [
  { path: '/', label: '首页', icon: 'home', description: '全站概览与推荐' },
  { path: '/guides', label: '地陪', icon: 'compass', description: '寻找当地向导与达人' },
  { path: '/bounty', label: '悬赏', icon: 'flag', description: '发布需求，等待接单' },
  { path: '/community', label: '社区', icon: 'layers', description: '游记、攻略与提问' },
  { path: '/attractions', label: '景点', icon: 'map', description: '官方旅行百科' },
  { path: '/messages', label: '消息', icon: 'message', description: '与地陪实时沟通' },
  { path: '/profile', label: '我的', icon: 'user', description: '订单、钱包与设置' },
];

export const mobileTabNav: NavItem[] = [
  primaryNav[0],
  primaryNav[1],
  primaryNav[2],
  primaryNav[5],
  primaryNav[6],
];
