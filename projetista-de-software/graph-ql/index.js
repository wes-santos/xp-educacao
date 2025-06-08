// GraphQL é uma linguagem de consulta para APIs
// É uma forma de interagir e construir APIs

// Vantagens
// Flexível: permite que o cliente solicite exatamente os dados que quer.
// Menos chamadas.

// Desvantagens
// Complexidade e curva de aprendizado.

const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const fs = require('fs');
const path = require('path');

const books = JSON.parse(fs.readFileSync(path.join(__dirname, 'books.json'), 'utf-8'))

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
    author(id: ID!): Author
  }

  type Mutation {
    addBook(title: String!, author: AuthorInput!) : Book!
  }

  input AuthorInput {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    addBook: (parent, { title, author }) => {
      const newBook = {
        id: String(books.length + 1),
        title,
        author: {
          id: author.id,
          name: author.name
        }
      };

      books.push(newBook);
      fs.writeFileSync(path.join(__dirname, 'books.json'), JSON.stringify(books, null, 2), 'utf-8');
      return newBook;
    } 
  }
}

const server = new ApolloServer({typeDefs, resolvers});
const app = express();

server.start().then(() => {
    server.applyMiddleware({app});
    app.listen({port: 4000}, () => console.log('Up and running!'));
  }
);


