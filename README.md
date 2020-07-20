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