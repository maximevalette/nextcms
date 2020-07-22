# NextCMS

Strapi + GraphQL + Next.js (with GA and SSR)

```
git clone git@github.com:maximevalette/nextcms my-website && \
cd my-website && \
make install && \
make clean
```

## Environment variables

```
API_URL=http://localhost:1337/graphql
GA_ID=UA-XXXXXXXX-XX
```

## GraphQL

For the first page to run correctly you need to create a `Block` collection in Strapi with the following items:

- `title`: Text
- `content`: Rich text

## Development

NextCMS run in a Node.js local environment to allow efficient hot reload. You can start both backend and frontend with a single `make` command:

```
make start
make stop
```

## Production

NextCMS comes with a Docker ready production file `docker-compose.yml` with Traefik labels. You need to have a Traefik running with a public `web` network (or you can change it in the file according to your environment).

## Documentation

- Strapi: https://strapi.io/documentation/v3.x/
- Next.js: https://nextjs.org/docs/getting-started