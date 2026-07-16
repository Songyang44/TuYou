// 全站共享类型定义（第一阶段使用虚构数据，字段先按 PRD 设计好）

export interface Guide {
  id: string;
  name: string;
  avatar: string; // 头像渐变色 key，占位用
  country: string;
  city: string;
  age: number;
  languages: string[];
  profession: string;
  rating: number;
  reviewCount: number;
  orderCount: number;
  verified: {
    identity: boolean;
    phone: boolean;
    passport: boolean;
    license: boolean;
    vehicle: boolean;
    guideCert: boolean;
  };
  bio: string;
  services: string[];
  tags: string[];
  pricePerHour: number;
  hasVehicle: boolean;
  gender: '女性地陪' | '男性地陪' | '情侣地陪';
  cover: string; // 封面渐变 key
  responseRate: number;
  responseTime: string;
  photos: string[];
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  content: string;
  tags: string[];
  date: string;
}

export interface Bounty {
  id: string;
  title: string;
  category: string;
  budget: number;
  date: string;
  city: string;
  country: string;
  people: number;
  requirements: string[];
  applicants: number;
  status: '招募中' | '已成交' | '已结束';
  publisher: string;
}

export interface Post {
  id: string;
  title: string;
  author: string;
  avatar: string;
  cover: string;
  excerpt: string;
  tags: string[];
  likes: number;
  comments: number;
  favorites: number;
  date: string;
  type: '游记' | '攻略' | '提问' | '分享';
}

export interface Country {
  id: string;
  name: string;
  flagEmoji: string;
  cover: string;
  cityCount: number;
  description: string;
}

export interface City {
  id: string;
  countryId: string;
  name: string;
  cover: string;
  spotCount: number;
  description: string;
}

export interface Spot {
  id: string;
  cityId: string;
  name: string;
  cover: string;
  openHours: string;
  ticket: string;
  bestSeason: string;
  suggestedDuration: string;
  rating: number;
  description: string;
}

export interface Order {
  id: string;
  guideName: string;
  service: string;
  date: string;
  amount: number;
  status: '待付款' | '已付款' | '待确认' | '服务中' | '已完成' | '售后';
}

export interface Message {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  type: 'chat' | 'system';
}

export interface NavSection {
  id: string;
  label: string;
  icon: string;
}
