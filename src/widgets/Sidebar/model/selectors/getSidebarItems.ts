import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import IconAbout from 'shared/assets/icons/aboutIcon.svg';
import IconArticles from 'shared/assets/icons/articlesIcon.svg';
import IconMain from 'shared/assets/icons/mainIcon.svg';
import IconProfile from 'shared/assets/icons/profileIcon.svg';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { SidebarItemType } from '../types/sidebarItem';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: Array<SidebarItemType> = [
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
  ];

  if (userData) {
    sidebarItems.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'Profile',
        Icon: IconProfile,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: IconArticles,
        authOnly: true,
      }
    );
  }

  return sidebarItems;
});
