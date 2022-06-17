export interface NavItem {
  id: string;
  label: string;
  routerLink: string;
  linkActiveClass: string;
  subItems?: NavItem[];
}

export interface NavConfig {
  linkClickFn?: () => void;
  navItems: NavItem[];
}
