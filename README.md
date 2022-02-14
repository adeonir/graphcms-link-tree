# GraphCMS Link Tree

This is an application similar to [LinkTree](https://linktr.ee/), builded with [Next.js](https://nextjs.org/) and powered by [GraphCMS](https://www.graphcms.com/).

# How to use

1. Create a new GraphCMS project
2. Download manually this repo:

```bash
npx degit adeonir/graphcms-link-tree graphcms-link-tree
```

3. Add .env:

```bash
cp .env.example .env
```

4. Provide values for `GRAPHCMS_AUTH_TOKEN` and `GRAPHCMS_ENDPOINT`
5. Install dependencies:

```bash
yarn
```

6. Run the migrations:

```bash
yarn migrations
```

> At this point, you should see 4 models in the GraphCMS Schema dashboard: Creator, Link, Page and Video

7. On GraphCMS Dashboard, create new content. Each page can have one creator and multiple links or videos
8. Run the server:

```bash
yarn dev
```

9. Open the browser and go to [http://localhost:3000/slug](http://localhost:3000/slug), where slug is the text you provided on the Page model

---

## What's inside

- [NextJS](https://nextjs.org)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [GraphCMS](https://www.graphcms.com)
- [GraphQL Request](https://github.com/prisma-labs/graphql-request)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com)

---

Made with ♥️ by Adeonir Kohl
