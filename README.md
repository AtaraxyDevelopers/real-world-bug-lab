# Real-World Bug Lab

[![CI](https://github.com/AtaraxyDevelopers/real-world-bug-lab/actions/workflows/ci.yml/badge.svg)](https://github.com/AtaraxyDevelopers/real-world-bug-lab/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Ten runnable debugging exercises with regression tests, hints, and solutions.

An open-source project from [Ataraxy Developers](https://github.com/AtaraxyDevelopers).

## Quick start

Install [Node.js](https://nodejs.org/en/download) 22 or 24 (npm is included). Check
`node --version` and `npm --version` in your terminal. The commands below run from
this repository's root folder, the one containing `package.json`.

**With Git:**

```sh
git clone https://github.com/AtaraxyDevelopers/real-world-bug-lab.git
cd real-world-bug-lab
npm ci
npm test
```

**Without Git:** choose **Code → Download ZIP** on GitHub, extract the archive,
and open a terminal in the extracted `real-world-bug-lab-main` folder (release archives may
include the version in the folder name). Run `npm ci` and `npm test` there.
Use the **source-code ZIP**, not an npm `.tgz` package, to follow this developer walkthrough.
The install step may need internet access; the examples run locally afterward.

On Windows PowerShell, if `npm.ps1` is blocked by execution policy, use `npm.cmd`
in place of `npm` in these commands. No execution-policy change is required.

Choose an exercise and reproduce its bug:

```sh
npm run exercise -- 01
npm run exercise -- 01 --solution
npm run solutions
```

The first command **intentionally exits with code 1** until you repair the exercise.
Edit the selected `exercises/01/bug.mjs` and run it again. The normal `npm test`
suite checks reference solutions and immutable original bug samples in `fixtures/original-bugs`.
Your edits to `exercises/01/bug.mjs` do not break that suite. Use the exercise runner
to check your solution; it checks both the result and the promise not to mutate inputs.

## Lessons

- [01 Numeric sorting](exercises/01/README.md)
- [02 UTC calendar dates](exercises/02/README.md)
- [03 Empty averages](exercises/03/README.md)
- [04 Money totals](exercises/04/README.md)
- [05 Required fields](exercises/05/README.md)
- [06 Awaiting collections](exercises/06/README.md)
- [07 Duplicate events](exercises/07/README.md)
- [08 Dictionary keys](exercises/08/README.md)
- [09 Visible characters](exercises/09/README.md)
- [10 Pagination boundaries](exercises/10/README.md)

## Teaching workflow

Read the contract, run the failing case, explain the cause, make the smallest fix,
and add another input that would catch the same mistake. Each folder includes a
collapsible hint, synthetic cases, and a reference solution. Compare reasoning as
well as outputs. A solution may differ from the reference and still be correct.

## Scope and limitations

These are focused modules, not full applications. The money lesson accepts only
nonnegative prices with at most two decimal places; real financial systems need a
documented rounding policy and decimal or integer-based storage. Event deduplication
is in memory and not a distributed exactly-once guarantee.

## Expected first run

The repository tests pass on a fresh checkout. An unsolved exercise deliberately exits with status 1; `--solution` and `npm run solutions` pass.

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [community expectations](CODE_OF_CONDUCT.md),
and [SECURITY.md](SECURITY.md). Open an issue with a minimal synthetic reproduction.
This project is maintained on a best-effort basis. No paid service or account is
required to run the local examples.

## License

[MIT](LICENSE). You may use, adapt, and redistribute this project under its license.
