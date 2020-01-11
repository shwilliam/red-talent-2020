import path from 'path'
import scrapedin from 'scrapedin'

const LINKEDIN_IDS = [
  'william-lindvall',
  'edin-kaymakqi-3243b3163',
  'robertohhr',
]

export default {
  getRoutes: async () => {
    const profiles = await scrapedin({
      email: 'w-lindvall@outlook.com',
      password: 'PASSWORD',
    })
      .then(scraper =>
        Promise.all(
          LINKEDIN_IDS.map(id =>
            scraper(`https://www.linkedin.com/in/${id}`),
          ),
        ),
      )
      .then(d => console.log(d) || d)

    return [
      {
        path: '/students',
        getData: () => ({
          profiles,
        }),
      },
      // {
      //   path: '/profile',
      //   getData: () => ({
      //     students,
      //   }),
      //   children: students.map(student => ({
      //     path: `/${student.Name.split(' ')
      //       .join('_')
      //       .toLowerCase()}`,
      //     template: 'src/containers/Student',
      //     getData: () => ({
      //       student,
      //     }),
      //   })),
      // },
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
