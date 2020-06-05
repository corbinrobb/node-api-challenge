const express = require('express');
const projectRouter = require('./routers/project-router');
const actionRouter = require('./routers/actions-router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.listen(5000, () => {
  console.log("\n Server running on 5000 \n");
})