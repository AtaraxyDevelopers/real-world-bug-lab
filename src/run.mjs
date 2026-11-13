import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const args = process.argv.slice(2);
const catalog = JSON.parse(
  await fs.readFile(new URL('../exercises/index.json', import.meta.url), 'utf8'),
);
const id = args[0];
if (!id || id === '--help') {
  console.log(
    'Usage: npm run exercise -- <01..10|all> [--solution]\n' +
      catalog.map((e) => e.id + ' ' + e.title).join('\n'),
  );
} else if (
  (id !== 'all' && !catalog.some((e) => e.id === id)) ||
  args.slice(1).some((a) => a !== '--solution')
) {
  console.error('Unknown exercise or option.');
  process.exitCode = 2;
} else {
  for (const item of catalog.filter((e) => id === 'all' || e.id === id)) {
    const fn = (
      await import(
        '../exercises/' +
          item.id +
          '/' +
          (args.includes('--solution') ? 'solution' : 'bug') +
          '.mjs'
      )
    ).default;
    const cases = JSON.parse(
      await fs.readFile(
        new URL('../exercises/' + item.id + '/cases.json', import.meta.url),
        'utf8',
      ),
    );
    console.log('\n' + item.id + ' ' + item.title);
    for (const [i, c] of cases.entries())
      try {
        assert.deepEqual(await fn(...structuredClone(c.args)), c.expected);
        console.log('PASS case ' + (i + 1));
      } catch (e) {
        console.log('FAIL case ' + (i + 1) + ': ' + e.message);
        process.exitCode = 1;
      }
  }
}
