export default {
  widgets: [
    {
      name: `vercel`,
      options: {
        deployLimit: 5,
        deployHook: process.env.VERCEL_DEPLOY_HOOK,
        forceSmallLayout: false,
        projectId: process.env.VERCEL_PROJECT_ID,
        token: process.env.VERCEL_TOKEN,
      },
      layout: {
        width: `large`,
      },
    },
  ],
};
