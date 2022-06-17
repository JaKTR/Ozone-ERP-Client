import {NavItem} from "./interfaces";

let navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    routerLink: '/home',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'rosters',
    label: 'Rosters',
    linkActiveClass: 'nav-btn-active',
    subItems: [
      {
        id: '671',
        label: '671',
        routerLink: '/671',
        linkActiveClass: 'nav-btn-active',
      },
      {
        id: '672',
        label: '672',
        routerLink: '/672',
        linkActiveClass: 'nav-btn-active',
      }
    ]
  },
  {
    id: 'checks',
    label: 'Appliance Checks',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'contacts',
    label: 'Contacts',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'profile',
    label: 'Profile',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'stats',
    label: 'Stats',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'notices',
    label: 'Notices',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'trailer',
    label: 'Trailer',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'help',
    label: 'Help',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'issues',
    label: 'Known Issues',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'logout',
    label: 'Logout',
    routerLink: '/',
    linkActiveClass: 'nav-btn-active',
  },
];

export const mainNavItems = navItems;
