## About

A customizable website showcasing case studies built with [Next.js](https://nextjs.org/) and [Sanity](https://www.sanity.io/) as a headless CMS.

## Running locally

After cloning the repository:

- Install the dependencies: `pnpm install`
- Copy the example environment variables file and fill it with your Sanity project details: `cp .example.env .env.local`
- From your project's Sanity Studio, generate an API token with _Viewer_ permissions and paste its value in `SANITY_API_READ_TOKEN` in `.env.local`. This will be used for authentication with the API to fetch data for draft mode and live previewing.
- Run the development server: `pnpm dev`

You should now be able to access the website at [http://localhost:3000](http://localhost:3000) and the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)
