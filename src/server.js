import express from "express";

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

  const objMusica = {
    id: 2,
    nome,
    artista,
    url,
  };

  musicas.push(objMusica);

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
