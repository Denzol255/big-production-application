import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      key: 'value2',
    });
    expect(params).toBe('?test=value&key=value2');
  });
  test('test with undefined', () => {
    const params = getQueryParams({});
    expect(params).toBe('?');
  });
});
