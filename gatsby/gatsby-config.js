import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Georges Cool Website',
    siteUrl: `https:/gatsby.pizza`,
    description: `A Cool Webiste - Take a look!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin being added
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'cm8qyy5n',
        dataset: 'production',
        watchMode: true,
        token: process.env.sanity_token,
      },
    },
  ],
};
