# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-11-13

### Removed

- Remove comments for smaller output.

## [1.0.0] - 2025-08-31

### ⚠ BREAKING CHANGES

- Remove CommonJS version, now is **ESM ONLY**.
- Rewritten in TypeScript.

### Added

- Add `opts` parameter, see `README.md` for more information.
- Throw error if use invalid value.

### Removed

- Doesn't use `0` as default if use invalid value.

## [0.1.1] - 2025-06-03

### Added

- Return `0B` if use `NaN` value.
- Support negative value.
- Give better types.

## [0.1.0] - 2025-05-28

### Added

- Initial release
