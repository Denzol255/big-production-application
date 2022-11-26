import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (articleData, userData) => {
    if (!articleData || !userData) {
      return false;
    }

    return articleData.user.id === userData.id;
  }
);
