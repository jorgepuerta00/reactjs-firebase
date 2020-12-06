## About

I built this template with all the tools I found useful to develop my own personal projects, so it can be a bit biased. If you find something that you think is not relevant or could be improved, please open an issue or a pull request to fix it.

## Features

**React.js + TypeScript**

- Because I love strongly typed languages (I'm a bit of a java developer at heart)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**APIs**

- The demo project use two APIs, deployed on Azure App Service, through azure pipelines.

## Azure DevOps - Build Status

| Image | Status | Image | Status |
| ------------- | ------------- | ------------- | ------------- |
| Health-Explore WebApp |  [![Build Status](https://jorgepuerta.visualstudio.com/SeekQ/_apis/build/status/HealthExplore-webApp-Node-CI?branchName=master)](https://jorgepuerta.visualstudio.com/SeekQ/_build/latest?definitionId=22&branchName=master) | Health-Explore Job API | [![Build Status](https://jorgepuerta.visualstudio.com/SeekQ/_apis/build/status/HealthExplore-Job-Api-NetCore-CI?branchName=master)](https://jorgepuerta.visualstudio.com/SeekQ/_build/latest?definitionId=20&branchName=master) |
| Health-Explore Filters API | [![Build Status](https://jorgepuerta.visualstudio.com/SeekQ/_apis/build/status/HealthExplore-Filters-Api-NetCore-CI?branchName=master)](https://jorgepuerta.visualstudio.com/SeekQ/_build/latest?definitionId=21&branchName=master) | 

# Installation

Clone the repository and install the dependencies:

```shell
git clone https://github.com/jorgepuerta00/reactjs-firebase && cd reactjs-firebase && yarn install
```

## Usage

### Development

Serve with hot reload at localhost:3000.

```
yarn dev
```

### Build

Build for production: next.js automatically renders static HTML pages when possible. Then if you deploy on Azure you can have both statically rendered pages and server-side rendered pages.

```
yarn build
```

Launch a server for server-side rendering (after building the application):

```
yarn start
```

Generate a fully static project with pre-rendered pages to put directly on a server or any static website hosting platform. Note that you lose the possibility to have server-side rendered pages. With Vercel you should not have to run this command.

```
yarn export
```

## Deployment

This template is ready to be deployed on Azure with Continuos Deployment (CD):

Deploy static-rendered Next.js websites on Azure Static Web Apps Preview

### Prerequisites
An Azure account with an active subscription. Create an account for free.
A GitHub account. Create an account for free.
Node.js installed.

### Deploy your static website
The following steps show how to link the app you just pushed to GitHub to Azure Static Web Apps. Once in Azure, you can deploy the application to a production environment.

### Create a static app

1. Navigate to the Azure portal
2. Click Create a Resource
3. Search for Static Web Apps
4. Click Static Web Apps (Preview)
5. Click Create
6. Select a subscription from the Subscription drop-down list or use the default value.
7. Click the New link below the Resource group drop-down. In New resource group name, type mystaticsite and click OK
8. Provide a globally unique name for your app in the Name text box. Valid characters include a-z, A-Z, 0-9, and -. This value is used as the URL prefix for your static app in the format of https://<APP_NAME>.azurestaticapps.net.
8. In the Region drop-down, choose a region closest to you.
9. Select Free from the SKU drop-down.

![alt text] (https://docs.microsoft.com/en-us/azure/static-web-apps/media/deploy-nextjs/create-static-web-app.png)

### Add a GitHub repository

The new Static Web Apps account needs access to the repository with your Next.js app so it can automatically deploy commits.

1. Click the Sign in with GitHub button
2. Select the Organization under which you created the repo for your Next.js project, which may be your GitHub username.
3. Find and select the name of the repository you created earlier.
4. Choose master as the branch from the Branch drop-down.

![alt text] (https://docs.microsoft.com/en-us/azure/static-web-apps/media/deploy-nextjs/connect-github.png)

### Configure the build process

Azure Static Web Apps is built to automatically carry out common tasks like installing npm modules and running npm run build during each deployment. There are, however, a few settings like the application source folder and the build destination folder that you need to configure manually.

1. Click on the Build tab to configure the static output folder.

![alt text] (https://docs.microsoft.com/en-us/azure/static-web-apps/media/deploy-nextjs/build-tab.png)

2. Type out in the App artifact location text box.

### Review and create

1. Click the Review + Create button to verify the details are all correct.
2. Click Create to start the creation of the resource and also provision a GitHub Action for deployment.
3. Once the deployment is completed, click Go to resource
4. On the Overview window, click the URL link to open your deployed application.
If the website does note immediately load, then the background GitHub Actions workflow is still running. Once the workflow is complete you can then click 6. refresh the browser to view your web app. If the website does note immediately load, then the background GitHub Actions workflow is still running. Once the workflow is complete you can then click refresh the browser to view your web app.

You can check the status of the Actions workflows by navigating to the Actions for your repository:

### Sync changes
When you created the app, Azure Static Web Apps created a GitHub Actions workflow file in your repository. You need to bring this file down to your local repository so your git history is synchronized.

Return to the terminal and run the following command git pull origin master.

### Configure dynamic routes
Navigate to the newly-deployed site and click on one of the framework or library logos. Instead of getting a details page, you get a 404 error page.

### Generate static pages from dynamic routes
1. Update the next.config.js file so that Next.js uses a list of all available data to generate static pages for each framework/library:

```
const data = require('./utils/projectsData');

module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    const { projects } = data;
    const paths = {
      '/': { page: '/' },
    };

    projects.forEach((project) => {
      paths[`/project/${project.slug}`] = {
        page: '/project/[path]',
        query: { path: project.slug },
      };
    });

    return paths;
  },
};
```

2. Push the new changes to your GitHub repository and wait for a few minutes while GitHub Actions builds your site again. After the build is complete, the 404 error disappears.

![alt text] (https://docs.microsoft.com/en-us/azure/static-web-apps/media/deploy-nextjs/404-in-production-fixed.png)