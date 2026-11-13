import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
test('a repaired exercise passes without breaking the repository suite', async (t) => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'buglab-learner-'));
  t.after(() => fs.rm(directory, { recursive: true, force: true }));
  for (const name of ['src', 'exercises', 'fixtures'])
    await fs.cp(new URL('../' + name, import.meta.url), path.join(directory, name), {
      recursive: true,
    });
  await fs.mkdir(path.join(directory, 'test'));
  await fs.copyFile(
    new URL('./exercises.test.mjs', import.meta.url),
    path.join(directory, 'test/exercises.test.mjs'),
  );
  const run = (...args) => spawnSync(process.execPath, args, { cwd: directory, encoding: 'utf8' });
  assert.equal(run('src/run.mjs', '01').status, 1, 'fresh exercise reproduces its bug');
  await fs.copyFile(
    path.join(directory, 'exercises/01/solution.mjs'),
    path.join(directory, 'exercises/01/bug.mjs'),
  );
  let result = run('src/run.mjs', '01');
  assert.equal(result.status, 0, result.stdout + result.stderr);
  result = run('--test', 'test/exercises.test.mjs');
  assert.equal(result.status, 0, result.stdout + result.stderr);
  await fs.writeFile(
    path.join(directory, 'exercises/01/bug.mjs'),
    'export default values => values.sort((a,b)=>a-b);',
  );
  result = run('src/run.mjs', '01');
  assert.equal(result.status, 1, 'a mutating sort must fail its documented contract');
  assert.match(result.stdout, /mutate/);
});
