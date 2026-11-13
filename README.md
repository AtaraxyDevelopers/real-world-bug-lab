# Real-World Bug Lab

[![CI](https://github.com/AtaraxyDevelopers/real-world-bug-lab/actions/workflows/ci.yml/badge.svg)](https://github.com/AtaraxyDevelopers/real-world-bug-lab/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Ten runnable debugging exercises with regression tests, hints, and solutions.

An open-source project from [Ataraxy Developers](https://github.com/AtaraxyDevelopers).

## Quick start

Requires Node.js 22 or 24 and npm. Git is optional if you download the source ZIP.

```sh
git clone https://github.com/AtaraxyDevelopers/real-world-bug-lab.git
cd real-world-bug-lab
npm ci
npm test
```

Choose an exercise and reproduce its bug:

```sh
npm run exercise -- 01
npm run exercise -- 01 --solution
npm run solutions
```

The first command **intentionally exits with code 1** until you repair the exercise.
Edit the selected `exercises/01/bug.mjs` and run it again. The normal `npm test`
suite checks both that the reference solutions pass and that the original bugs are
reproducible. After solving an exercise, that exercise's intentional-bug test will
fail by design; use the exercise runner to check your work.

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

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [community expectations](CODE_OF_CONDUCT.md),
and [SECURITY.md](SECURITY.md). Open an issue with a minimal synthetic reproduction.
This project is maintained on a best-effort basis. No paid service or account is
required to run the local examples.

## License

[MIT](LICENSE). You may use, adapt, and redistribute this project under its license.
