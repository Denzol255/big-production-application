const { resolve } = require('path');

const basePath = resolve(__dirname, 'node_modules');
const groupSelectors = `${basePath}/stylelint-group-selectors`;
const cssTreeValidator = `${basePath}/stylelint-csstree-validator`;

module.exports = {
  plugins: [groupSelectors, cssTreeValidator],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-css-modules'],
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
    'string-quotes': [
      'single',
      {
        avoidEscape: false,
      },
    ],
  },
};
