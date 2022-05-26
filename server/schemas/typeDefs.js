const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        username: String!  
        createdAt: String!    
    }

    type Post {
        id: ID!
        bod y: String!
        username: String!
        comments: [Comment]!
        likes: [Like]!
        commentCount: Int!
        likeCount: Int!
    }

    type Comment {
        id: ID!
        body: String!
        username: String!
        body: String!
    }

    type Like {
        _id: ID!
        createdAt: String!
        username: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        posts: [Post]
        getPost(postId: ID!): Post
    }

    type Mutation {
        signup(name: String!, email: String!, password: String!): User!
        login(email: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(postId: ID!, body: String!): Post!
        deleteComment(postId:ID!, body: String!): Post!
        likePost(postId: ID!): Post!
    }
`

module.exports = typeDefs