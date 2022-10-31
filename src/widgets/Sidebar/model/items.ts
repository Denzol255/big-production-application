import IconAbout from 'shared/assets/icons/aboutIcon.svg';
import IconArticles from 'shared/assets/icons/articlesIcon.svg';
import IconMain from 'shared/assets/icons/mainIcon.svg';
import IconProfile from 'shared/assets/icons/profileIcon.svg';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItems: Array<SidebarItemType> = [
  {
    path: RoutePath.main,
    text: 'Main',
    Icon: IconMain,
  },
  {
    path: RoutePath.about,
    text: 'About',
    Icon: IconAbout,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    Icon: IconProfile,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Articles',
    Icon: IconArticles,
    authOnly: true,
  },
];
