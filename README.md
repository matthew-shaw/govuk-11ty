# GOV.UK Eleventy

## Requirements

- Docker, or...
- Node

## Quickstart

```shell
docker run --rm -it -p 8000:8000 ghcr.io/matthew-shaw/govuk-11ty:main
```

Open: <http://localhost:8080/govuk-11ty/>

## Developing

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
