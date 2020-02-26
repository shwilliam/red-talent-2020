import path from 'path'
import fs from 'fs'
import {parse} from 'csv'

require('dotenv').config()

const getGraduates = () =>
  new Promise(res => {
    let data
    const stream = fs
      .createReadStream(`${__dirname}/data/graduates.csv`)
      .pipe(
        parse({delimiter: ','}, (_, d) => {
          data = d
            .map(
              ([
                name,
                lastName,
                dep,
                attending,
                _,
                url,
                bio,
                interests,
                imgUrl,
              ]) => ({
                name,
                lastName,
                dep,
                attending,
                url,
                bio,
                interests,
                imgUrl,
              }),
            )
            .slice(1) // remove title row
            .filter(p => p.imgUrl)
        }),
      )
    stream.on('end', () => res(data))
  })

export default {
  getRoutes: async () => [
    {
      path: '/',
      getData: async () => ({
        profiles: await getGraduates(),
      }),
    },
  ],
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
