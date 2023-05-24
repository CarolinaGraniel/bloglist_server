const Blog = require('../models/blog')
const User = require('../models/user')

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'Prueba',
    author: 'Prueba',
    url: 'http://www.prueba.com',
    likes: 200
  })
  await blog.save()
  await Blog.deleteOne({ _id: blog._id })

  return blog._id.toString()
}


//PARA BLOGS
const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}


//PARA USUARIOS
const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

/* const initialBlogs = [
  {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  },
  {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
  },
  {
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
  },
  {
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 5,
  },
  {
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
  },
] */

 const initialBlogs = [
  {
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 5
  },
  {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  }
] 

const initialUsers = [
  {
    username: 'timtes',
    name: 'Timothy Testson',
    password: 'testpassword123'
  },
  {
    username: 'admin admin',
    name: 'admin admin',
    password: 'cisco cisco'
  }
]

const testUserCredentials = [{
  username: initialUsers[0].username,
  password: initialUsers[0].password
},
{
  username: initialUsers[1].username,
  password: initialUsers[1].password
}
]

module.exports = {
  initialBlogs,
  initialUsers,
  testUserCredentials,
  nonExistingId,
  blogsInDb,
  usersInDb
}
