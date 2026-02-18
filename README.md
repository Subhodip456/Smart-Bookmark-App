Challenges faced while creating the Smart Bookmark App
Frontend not updating after bookmark insert
Bookmarks were getting stored in Supabase but were not reflecting in the UI due to state not being refreshed properly after insertion.

Handling Supabase async operations
Managing async calls and ensuring proper error handling was necessary to avoid silent failures.

Database Row Level Security (RLS) configuration
Ensuring that users could only access their own bookmarks required correct Supabase RLS policy setup.

Duplicate entries issue
Multiple rows were getting inserted due to repeated trigger calls, which required validation before insert.

Git branch mismatch (main vs master)
Deployment issues occurred because GitHub default branch was different from the deployed branch.

Environment variables in Vercel
Deployment initially failed because Supabase URL and API keys were not configured correctly in Vercel.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



