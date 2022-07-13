export interface NavItem {
  id: string;
  label: string;
  routerLink?: string;
  linkActiveClass?: string;
  subItems?: NavItem[];
}

export interface NavConfig {
  linkClickFn?: () => void;
  navItems: NavItem[];
}

export interface User {
  username: string,
  first_name: string,
  last_name: string,
  organization_id: string,
  mobile: number,
  role: string
}
