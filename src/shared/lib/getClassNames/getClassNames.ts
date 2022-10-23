export type Mods = Record<string, boolean | string | undefined>;

export const getClassNames = (
  mainClass: string,
  mods: Mods = {},
  additionalClasses: Array<string | undefined> = []
) => {
  const handledMods = Object.keys(mods).filter((className) => mods[className]);
  return [mainClass, ...handledMods, ...additionalClasses.filter(Boolean)].join(
    ' '
  );
};
