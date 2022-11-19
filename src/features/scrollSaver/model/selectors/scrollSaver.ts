import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollSaverScroll = (state: StateSchema) =>
  state.scrollSaver.scroll;
export const getScrollSaverScrollByPath = createSelector(
  getScrollSaverScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
