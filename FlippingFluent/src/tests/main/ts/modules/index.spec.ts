import testMe from 'Scripts/main/ts/modules/module_one';

describe('Index tests', () => {
  test.todo("Don't forget create test's");

  test('First test for example', () => {
    const result = testMe(2);

    expect(result).toBe(4);
    expect(result).toEqual(4);
    expect(result).not.toBe(3);
  });
});
