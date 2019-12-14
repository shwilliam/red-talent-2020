import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    const students = await axios
      .get('http://localhost:1337/students')
      .then(res => res.data)

    return [
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
