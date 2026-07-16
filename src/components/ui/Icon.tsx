export type IconName = keyof typeof paths;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}

const paths = {
  home: 'M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9',
  compass: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.2 4.8-2 5.4-5.4 2 2-5.4 5.4-2Z',
  flag: 'M6 21V4a1 1 0 0 1 1-1c2 0 3 1 5 1s3-1 5-1v9c-2 0-3 1-5 1s-3-1-5-1v9',
  layers: 'm12 3 8 4-8 4-8-4 8-4Zm-8 8 8 4 8-4M4 15l8 4 8-4',
  map: 'M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Zm0 0v14m6-12v14',
  message: 'M4 5h16v11H8l-4 4V5Z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c1-3.5 4-5.5 7-5.5s6 2 7 5.5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  search: 'm20 20-3.5-3.5M17 10.5A6.5 6.5 0 1 1 4 10.5a6.5 6.5 0 0 1 13 0Z',
  filter: 'M4 6h16M7 12h10M10 18h4',
  star: 'm12 3 2.6 5.9 6.4.6-4.8 4.4 1.4 6.3L12 17l-5.6 3.2 1.4-6.3L3 9.5l6.4-.6L12 3Z',
  car: 'M5 16v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3M4 16l1.5-5A2 2 0 0 1 7.4 9.5h9.2a2 2 0 0 1 1.9 1.5L20 16H4Zm3 0h.01M17 16h.01',
  camera: 'M4 8h3l1.5-2h7L17 8h3v11H4V8Zm8 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  language: 'M4 5h9M8 3v2m0 0c0 4-2.5 7-6 8m6-8c1.2 3 3 5 5 6M4 20l5-11 5 11M6 17h6M15 20l5-9 5 9m-8.5-3h7',
  verified: 'm9 12 2 2 4-4M12 3l2.2 1.3L17 4l.6 2.6L20 8l-1.3 2.2L20 12l-2.6.6L17 15l-2.6-.6L12 16l-2.4-1.6L7 15l-.6-2.4L4 12l1.3-2.2L4 8l2.6-.6L7 4Z',
  wallet: 'M4 7h16v11H4V7Zm0 0 2-3h10l2 3M15 12h3',
  heart: 'M12 20s-7-4.4-9.4-9A5 5 0 0 1 12 6a5 5 0 0 1 9.4 5c-2.4 4.6-9.4 9-9.4 9Z',
  share: 'M8 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 10.5l6-3m-6 6 6 3',
  location: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  calendar: 'M4 5h16v16H4V5Zm0 5h16M8 3v4m8-4v4',
  people: 'M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 8c.6-2.9 3-5 6-5s5.4 2.1 6 5M17 7.5a3 3 0 1 1 0 6M20 20c-.4-2-1.6-3.6-3-4.5',
  send: 'm4 12 16-8-6 16-2.4-6.5L4 12Z',
  chevronRight: 'm9 6 6 6-6 6',
  plus: 'M12 5v14M5 12h14',
  bell: 'M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Zm4.5 9a1.8 1.8 0 0 0 3 0',
  bolt: 'm13 3-8 11h5l-1 7 8-11h-5l1-7Z',
  hiking: 'M14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-2 3-3 3 2 2-1 6h2l1-5 2 2 3 5h2l-3.5-7-1.5-4-2-2Z',
};

export default function Icon({ name, size = 20, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
