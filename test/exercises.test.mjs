import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const catalog = JSON.parse(
  await fs.readFile(new URL('../exercises/index.json', import.meta.url), 'utf8'),
);
for (const item of catalog) {
  test(item.id + ' reference solution satisfies regression cases', async () => {
    const solution = (await import('../exercises/' + item.id + '/solution.mjs')).default;
    const cases = JSON.parse(
      await fs.readFile(
        new URL('../exercises/' + item.id + '/cases.json', import.meta.url),
        'utf8',
      ),
    );
    for (const c of cases) {
      const args = structuredClone(c.args);
      assert.deepEqual(await solution(...args), c.expected);
      assert.deepEqual(args, c.args, 'solution must not mutate input');
    }
  });
  test(item.id + ' reproduces the intentional bug', async () => {
    const bug = (await import('../fixtures/original-bugs/' + item.id + '.mjs')).default;
    const cases = JSON.parse(
      await fs.readFile(
        new URL('../exercises/' + item.id + '/cases.json', import.meta.url),
        'utf8',
      ),
    );
    let failures = 0;
    for (const c of cases)
      try {
        assert.deepEqual(await bug(...structuredClone(c.args)), c.expected);
      } catch {
        failures++;
      }
    assert.ok(failures > 0, 'the lesson needs an observable regression');
  });
}
