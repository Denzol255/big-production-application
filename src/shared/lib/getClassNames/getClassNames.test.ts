import { getClassNames } from './getClassNames';

describe('getClassNames', () => {
  test('only one class', () => {
    expect(getClassNames('someClass')).toBe('someClass');
  });
  test('with additional classes', () => {
    expect(getClassNames('someClass', {}, ['one', 'two', undefined])).toBe(
      'someClass one two'
    );
  });
  test('with mods', () => {
    expect(getClassNames('someClass', { selected: true, hovered: true })).toBe(
      'someClass selected hovered'
    );
  });
  test('with disabled mods', () => {
    expect(
      getClassNames('someClass', {
        selected: true,
        hovered: false,
        clicked: null,
      })
    ).toBe('someClass selected');
  });
  test('with disabled mods and additional classes', () => {
    expect(
      getClassNames(
        'someClass',
        {
          selected: true,
          hovered: false,
          clicked: true,
        },
        ['123', '321']
      )
    ).toBe('someClass selected clicked 123 321');
  });
  test('empty', () => {
    expect(getClassNames('')).toBe('');
  });
});
