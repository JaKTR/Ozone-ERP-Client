import {NavItem} from "../interfaces";

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
    routerLink: '/checks',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'contacts',
    label: 'Contacts',
    routerLink: '/contacts',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'profile',
    label: 'Profile',
    routerLink: '/profile',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'stats',
    label: 'Stats',
    routerLink: '/stats',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'notices',
    label: 'Notices',
    routerLink: '/notices',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'trailer',
    label: 'Trailer',
    routerLink: '/trailer',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'help',
    label: 'Help',
    routerLink: '/help',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'issues',
    label: 'Known Issues',
    routerLink: '/issues',
    linkActiveClass: 'nav-btn-active',
  },
  {
    id: 'logout',
    label: 'Logout',
    routerLink: '/logout',
    linkActiveClass: 'nav-btn-active',
  },
];

export const mainNavItems = navItems;
