export interface MenuLink {
  display: string;
  url: string;
}

export const COMMANDS_LIST: MenuLink[] = [
  { display: 'find', url: '/find' },
  { display: 'if', url: '/if' },
  { display: 'nmap', url: '/nmap' },
  { display: 'cd', url: '/cd' },
  { display: 'host', url: '/host' },
];
