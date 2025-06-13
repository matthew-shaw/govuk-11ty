# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/matthew-shaw/govuk-11ty/compare/v1.0.0...latest)

## [v1.0.0](https://github.com/matthew-shaw/govuk-11ty/releases/tag/v1.0.0) - 2025-06-13

### Added

- Basic X-GOV.UK Eleventy plugin setup
  - Debranded GOV.UK for deployment (removed logotype, icons and font)
  - Added Service Navigation component
- NPM convenience scripts:
  - `build` with [Eleventy](https://www.npmjs.com/package/@11ty/eleventy)
  - `start` with [Eleventy](https://www.npmjs.com/package/@11ty/eleventy)
  - `format` with [Prettier](https://www.npmjs.com/package/prettier)
  - `upgrade` with [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
- Local development environment using an Alpine Node.js LTS image and Docker Compose Watch to:
  - Sync changes in the `/docs` directory to the running container for live reloading
  - Rebuild the container when `package.json` changes
- GitHub Actions to:
  - Deploy built static files to GitHub Pages
  - Build and push Docker image to the [GitHub Container Registry](https://github.com/matthew-shaw/govuk-11ty/pkgs/container/govuk-11ty)
