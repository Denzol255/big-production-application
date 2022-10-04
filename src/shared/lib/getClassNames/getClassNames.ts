type Mods = Record<string, boolean | string>;

export const getClassNames = (
  mainClass: string,
  mods: Mods = {},
  additionalClasses: Array<string> = []
) => {
  const handledMods = Object.keys(mods).filter((className) => mods[className]);
  return [mainClass, ...handledMods, ...additionalClasses.filter(Boolean)].join(
    ' '
  );
};
