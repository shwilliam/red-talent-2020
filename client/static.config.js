import path from 'path'
import scrapedin from 'scrapedin'
import {LINKEDIN_IDS} from './data'

require('dotenv').config()

export default {
  getRoutes: async () => {
    // fetch students linkedin profile data
    const profiles = await scrapedin({
      email: process.env.REACT_APP_LINKEDIN_EMAIL,
      password: process.env.REACT_APP_LINKEDIN_PASSWORD,
    })
      .then(scraper =>
        Promise.all(
          Object.keys(LINKEDIN_IDS).map(id =>
            scraper(`https://www.linkedin.com/in/${id}`),
          ),
        ),
      )
      .then(console.log)

    return [
      {
        path: '/',
        getData: () => ({
          profiles,
        }),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
