const users = [
  {
    id: '1',
    name: 'Hubert',
    email: 'test1@gmail.com'
  },
  {
    id: '2',
    name: 'Winford',
    email: 'test2@gmail.com'
  },
  {
    id: '3',
    name: 'Dad',
    email: 'test3@gmail.com'
  }
];
const posts = [
  {
    id: '1',
    title: 'title1',
    body: 'body1',
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'title2',
    body: 'body2',
    published: true,
    author: '2'
  },
  {
    id: '3',
    title: 'title3',
    body: 'body3',
    published: false,
    author: '3'
  }
];

const comments = [
  {
    id: '1',
    text: 'comment1',
    author: '1',
    post: '1'
  },
  {
    id: '2',
    text: 'comment2',
    author: '2',
    post: '2'
  },
  {
    id: '1',
    text: 'comment3',
    author: '1',
    post: '1'
  },
  {
    id: '3',
    text: 'comment4',
    author: '1',
    post: '1'
  }
];

const db = {
  users,
  posts,
  comments
};

export default db;
