---
title: "Creating your first blog using next"
excerpt: ""
coverImage: "/assets/blog/preview/creatingablog.jpg"
date: "2024-01-28T05:35:07.322Z"
author:
  name: Paddy
  picture: "/assets/blog/authors/paddy23.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---
## Automatic Installation

Automatic Installation
We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

Terminal

npx create-next-app@latest

On installation, you'll see the following prompts:

Terminal

What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
After the prompts, create-next-app will create a folder with your project name and install the required dependencies.

Good to know:

Next.js now ships with TypeScript, ESLint, and Tailwind CSS configuration by default.
You can optionally use a src directory in the root of your project to separate your application's code from configuration files.

Run the Development Server
Run npm run dev to start the development server.
Visit http://localhost:3000 to view your application.
Edit app/page.tsx (or pages/index.tsx) file and save it to see the updated result in your browser.


