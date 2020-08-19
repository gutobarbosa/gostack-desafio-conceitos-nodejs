const express = require("express");
const cors = require("cors");
const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {

  
  return response.json( repositories);
});

app.post("/repositories", (request, response) => {
  const {title,url,techs,likes} = request.body;
  const repositorie = { id: uuid(),title,url,techs,likes};

  repositories.push(repositorie);
  return response.json(repositorie);
});

app.put("/repositories/:id", (request, response) => {
  const {title,url,techs} = request.body;
    const {id} = request.params;

    //const newRepositorie = repositories;
    const repositorie = {
      title,
      url,
      techs
    };

    repositories[{id}] = repositories;

    return response.json(repositorie);

});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
