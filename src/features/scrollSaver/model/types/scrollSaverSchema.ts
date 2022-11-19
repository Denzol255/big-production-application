// <Адрес страницы, значение скролл топ>
export type ScrollSchema = Record<string, number>;

export interface ScrollSaverSchema {
  scroll: ScrollSchema;
}
