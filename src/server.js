import express from "express";

import { v4 as uuidv4 } from "uuid";

const servidor = express();
servidor.use(express.json());

const musicas = [
  {
    id: 1,
    musica: "3 Macetes 2",
    artista: "Dj blakes",
    url: "https://musicas.com/djblakes",
  },
];

servidor.post("/postar", (req, resp) => {
  const { nome, artista, url } = req.body;

  const idGerado = uuidv4();

  const objMusica = {
    id: idGerado,
    nome,
    artista,
    url,
  };

  musicas.push(objMusica);

  return resp.status(201).send(musicas);
});

servidor.put("/atualizar/:id", (req, resp) => {
  const { id } = req.params;
  const { nome, artista, url } = req.body;

  const idxMusica = musicas.findIndex((m) => m.id == id);

  musicas[idxMusica] = {
    ...musicas[idxMusica],
    artista,
    nome,
    url,
  };

  return resp.send(musicas);
});

servidor.get("/musicas", (req, resp) => {
  return resp.send(musicas);
});

servidor.get("/musicas/:id", (req, resp) => {
  const { id } = req.params;

  const musica = musicas.find((m) => m.id == id);

  return resp.send(musica);
});

servidor.listen(3001, () => console.log("Servidor rodando !"));
