import path from 'path'
import axios from 'axios'
import {SERVER_URL} from './config'

export default {
  getRoutes: async () => {
    const students = await axios
      .get(`${SERVER_URL}/students`)
      .then(res => res.data)

    return [
      {
        path: '/students',
        getData: () => ({
          students,
        }),
      },
      {
        path: '/profile',
        getData: () => ({
          students,
        }),
        children: students.map(student => ({
          path: `/${student.Name.split(' ')
            .join('_')
            .toLowerCase()}`,
          template: 'src/containers/Student',
          getData: () => ({
            student,
          }),
        })),
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
