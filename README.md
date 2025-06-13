# GOV.UK Eleventy

## Requirements

- Docker, or...
- Node

## Quickstart

1.  ```shell
    docker run --rm -it -p 8080:8080 ghcr.io/matthew-shaw/govuk-11ty:<TAG>
    ```

    Where `<TAG>` is a [release version](https://github.com/matthew-shaw/govuk-11ty/releases), or `latest`

2.  Open: <http://localhost:8080/govuk-11ty/>

## Develop

```shell
git clone https://github.com/matthew-shaw/govuk-11ty.git
cd govuk-11ty
```

### With Docker Compose

```shell
docker compose watch
```

### With Node

```shell
nvm install
npm install
npm start
```

## Format

Use [Prettier](https://prettier.io/), an opinionated code formatter, for consistency.

To reformat files:

```shell
npm run format
```

## Upgrade

Use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to upgrade Node package dependencies:

```shell
npm run upgrade
```
