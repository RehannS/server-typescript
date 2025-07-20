import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger-output.json'; // Output file for generated spec
const endpointsFiles = ['../routes/post.route']; // Files with routes
// import routes from '../routes/post.route'
const doc = {
  info: {
    title: 'TypeScript Express API',
    version: '1.0.0',
    description: 'Automatically generated API documentation for the TypeScript Express server',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  tags: [
    {
      name: 'Posts',
      description: 'Operations related to posts',
    },
  ],
  components: {
    schemas: {
      Post: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          title: { type: 'string', example: 'Post Title' },
          content: { type: 'string', example: 'Post Content' },
        },
        required: ['title'],
      },
    },
  },
};

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);