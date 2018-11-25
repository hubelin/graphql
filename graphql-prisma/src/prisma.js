import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'thisisasecret'
});

export default prisma;

// prisma.query prisma.mutation prisma.subscription prisma.exists

/*------------Async function
1. Create new post
2. Fetch all info about user/author
*/
/*
const createPostForUser = async (authorId, data) => {
  const userExists = await prisma.exists.User({
    id: authorId
  });
  if (!userExists) {
    throw new Error('User not found');
  }
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId
          }
        }
      }
    },
    ' { author {id name email posts { id title published}}}'
  );
  return post.author;
};

// createPostForUser('cjou68np6002b0825fx4kvf4z', {
//   title: 'PostforUserAGAIN',
//   body: 'AGAIN',
//   published: true
// })
//   .then(user => console.log(JSON.stringify(user, undefined, 2)))
//   .catch(error => console.log(error));

const updatePostForUser = async (postId, data) => {
  const postExists = await prisma.exists.Post({
    id: postId
  });
  if (!postExists) {
    throw new Error('Post not found');
  }

  const post = await prisma.mutation.updatePost(
    {
      where: {
        id: postId
      },
      data
    },
    '{ author { id name email posts { id title published}}}'
  );
  return post.author;
};

// updatePostForUser('cjouleuzf003d0825q2lavr48', {
//   title: 'Updated',
//   body: 'hardest',
//   published: true
// })
//   .then(user => console.log(JSON.stringify(user, undefined, 2)))
//   .catch(error => console.log(error));

// prisma.mutation
//   .updatePost(
//     {
//       where: {
//         id: 'cjouci6nx00300825mregfgvq'
//       },
//       data: {
//         published: false,
//         title: 'CHANGED',
//         body: 'UPDATED'
//       }
//     },
//     '{ id}'
//   )
//   .then(data => {
//     return prisma.query.posts(null, '{id title body published}');
//   })
//   .then(data => console.log(JSON.stringify(data, undefined, 2)));
*/
