import { useEffect, useState } from 'react';
import './CSS/App.css';

const mock = [{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
  "name": "Earth (C-137)",
  "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
  "name": "Citadel of Ricks",
  "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
  "https://rickandmortyapi.com/api/episode/1",
  "https://rickandmortyapi.com/api/episode/2",
  "https://rickandmortyapi.com/api/episode/3",
  "https://rickandmortyapi.com/api/episode/4",
  "https://rickandmortyapi.com/api/episode/5",
  "https://rickandmortyapi.com/api/episode/6",
  "https://rickandmortyapi.com/api/episode/7",
  "https://rickandmortyapi.com/api/episode/8",
  "https://rickandmortyapi.com/api/episode/9",
  "https://rickandmortyapi.com/api/episode/10",
  "https://rickandmortyapi.com/api/episode/11",
  "https://rickandmortyapi.com/api/episode/12",
  "https://rickandmortyapi.com/api/episode/13",
  "https://rickandmortyapi.com/api/episode/14",
  "https://rickandmortyapi.com/api/episode/15",
  "https://rickandmortyapi.com/api/episode/16",
  "https://rickandmortyapi.com/api/episode/17",
  "https://rickandmortyapi.com/api/episode/18",
  "https://rickandmortyapi.com/api/episode/19",
  "https://rickandmortyapi.com/api/episode/20",
  "https://rickandmortyapi.com/api/episode/21",
  "https://rickandmortyapi.com/api/episode/22",
  "https://rickandmortyapi.com/api/episode/23",
  "https://rickandmortyapi.com/api/episode/24",
  "https://rickandmortyapi.com/api/episode/25",
  "https://rickandmortyapi.com/api/episode/26",
  "https://rickandmortyapi.com/api/episode/27",
  "https://rickandmortyapi.com/api/episode/28",
  "https://rickandmortyapi.com/api/episode/29",
  "https://rickandmortyapi.com/api/episode/30",
  "https://rickandmortyapi.com/api/episode/31",
  "https://rickandmortyapi.com/api/episode/32",
  "https://rickandmortyapi.com/api/episode/33",
  "https://rickandmortyapi.com/api/episode/34",
  "https://rickandmortyapi.com/api/episode/35",
  "https://rickandmortyapi.com/api/episode/36",
  "https://rickandmortyapi.com/api/episode/37",
  "https://rickandmortyapi.com/api/episode/38",
  "https://rickandmortyapi.com/api/episode/39",
  "https://rickandmortyapi.com/api/episode/40",
  "https://rickandmortyapi.com/api/episode/41",
  "https://rickandmortyapi.com/api/episode/42",
  "https://rickandmortyapi.com/api/episode/43",
  "https://rickandmortyapi.com/api/episode/44",
  "https://rickandmortyapi.com/api/episode/45",
  "https://rickandmortyapi.com/api/episode/46",
  "https://rickandmortyapi.com/api/episode/47",
  "https://rickandmortyapi.com/api/episode/48",
  "https://rickandmortyapi.com/api/episode/49",
  "https://rickandmortyapi.com/api/episode/50",
  "https://rickandmortyapi.com/api/episode/51"
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
  },
  {
"id": 2,
"name": "Morty Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Male",
"origin": {
"name": "unknown",
"url": ""
},
"location": {
"name": "Citadel of Ricks",
"url": "https://rickandmortyapi.com/api/location/3"
},
"image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
"episode": [
"https://rickandmortyapi.com/api/episode/1",
"https://rickandmortyapi.com/api/episode/2",
"https://rickandmortyapi.com/api/episode/3",
"https://rickandmortyapi.com/api/episode/4",
"https://rickandmortyapi.com/api/episode/5",
"https://rickandmortyapi.com/api/episode/6",
"https://rickandmortyapi.com/api/episode/7",
"https://rickandmortyapi.com/api/episode/8",
"https://rickandmortyapi.com/api/episode/9",
"https://rickandmortyapi.com/api/episode/10",
"https://rickandmortyapi.com/api/episode/11",
"https://rickandmortyapi.com/api/episode/12",
"https://rickandmortyapi.com/api/episode/13",
"https://rickandmortyapi.com/api/episode/14",
"https://rickandmortyapi.com/api/episode/15",
"https://rickandmortyapi.com/api/episode/16",
"https://rickandmortyapi.com/api/episode/17",
"https://rickandmortyapi.com/api/episode/18",
"https://rickandmortyapi.com/api/episode/19",
"https://rickandmortyapi.com/api/episode/20",
"https://rickandmortyapi.com/api/episode/21",
"https://rickandmortyapi.com/api/episode/22",
"https://rickandmortyapi.com/api/episode/23",
"https://rickandmortyapi.com/api/episode/24",
"https://rickandmortyapi.com/api/episode/25",
"https://rickandmortyapi.com/api/episode/26",
"https://rickandmortyapi.com/api/episode/27",
"https://rickandmortyapi.com/api/episode/28",
"https://rickandmortyapi.com/api/episode/29",
"https://rickandmortyapi.com/api/episode/30",
"https://rickandmortyapi.com/api/episode/31",
"https://rickandmortyapi.com/api/episode/32",
"https://rickandmortyapi.com/api/episode/33",
"https://rickandmortyapi.com/api/episode/34",
"https://rickandmortyapi.com/api/episode/35",
"https://rickandmortyapi.com/api/episode/36",
"https://rickandmortyapi.com/api/episode/37",
"https://rickandmortyapi.com/api/episode/38",
"https://rickandmortyapi.com/api/episode/39",
"https://rickandmortyapi.com/api/episode/40",
"https://rickandmortyapi.com/api/episode/41",
"https://rickandmortyapi.com/api/episode/42",
"https://rickandmortyapi.com/api/episode/43",
"https://rickandmortyapi.com/api/episode/44",
"https://rickandmortyapi.com/api/episode/45",
"https://rickandmortyapi.com/api/episode/46",
"https://rickandmortyapi.com/api/episode/47",
"https://rickandmortyapi.com/api/episode/48",
"https://rickandmortyapi.com/api/episode/49",
"https://rickandmortyapi.com/api/episode/50",
"https://rickandmortyapi.com/api/episode/51"
],
"url": "https://rickandmortyapi.com/api/character/2",
"created": "2017-11-04T18:50:21.651Z"
},
{
  "id": 3,
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  "origin": {
  "name": "Earth (Replacement Dimension)",
  "url": "https://rickandmortyapi.com/api/location/20"
  },
  "location": {
  "name": "Earth (Replacement Dimension)",
  "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  "episode": [
  "https://rickandmortyapi.com/api/episode/6",
  "https://rickandmortyapi.com/api/episode/7",
  "https://rickandmortyapi.com/api/episode/8",
  "https://rickandmortyapi.com/api/episode/9",
  "https://rickandmortyapi.com/api/episode/10",
  "https://rickandmortyapi.com/api/episode/11",
  "https://rickandmortyapi.com/api/episode/12",
  "https://rickandmortyapi.com/api/episode/14",
  "https://rickandmortyapi.com/api/episode/15",
  "https://rickandmortyapi.com/api/episode/16",
  "https://rickandmortyapi.com/api/episode/17",
  "https://rickandmortyapi.com/api/episode/18",
  "https://rickandmortyapi.com/api/episode/19",
  "https://rickandmortyapi.com/api/episode/20",
  "https://rickandmortyapi.com/api/episode/21",
  "https://rickandmortyapi.com/api/episode/22",
  "https://rickandmortyapi.com/api/episode/23",
  "https://rickandmortyapi.com/api/episode/24",
  "https://rickandmortyapi.com/api/episode/25",
  "https://rickandmortyapi.com/api/episode/26",
  "https://rickandmortyapi.com/api/episode/27",
  "https://rickandmortyapi.com/api/episode/29",
  "https://rickandmortyapi.com/api/episode/30",
  "https://rickandmortyapi.com/api/episode/31",
  "https://rickandmortyapi.com/api/episode/32",
  "https://rickandmortyapi.com/api/episode/33",
  "https://rickandmortyapi.com/api/episode/34",
  "https://rickandmortyapi.com/api/episode/35",
  "https://rickandmortyapi.com/api/episode/36",
  "https://rickandmortyapi.com/api/episode/38",
  "https://rickandmortyapi.com/api/episode/39",
  "https://rickandmortyapi.com/api/episode/40",
  "https://rickandmortyapi.com/api/episode/41",
  "https://rickandmortyapi.com/api/episode/42",
  "https://rickandmortyapi.com/api/episode/43",
  "https://rickandmortyapi.com/api/episode/44",
  "https://rickandmortyapi.com/api/episode/45",
  "https://rickandmortyapi.com/api/episode/46",
  "https://rickandmortyapi.com/api/episode/47",
  "https://rickandmortyapi.com/api/episode/48",
  "https://rickandmortyapi.com/api/episode/49",
  "https://rickandmortyapi.com/api/episode/51"
  ],
  "url": "https://rickandmortyapi.com/api/character/3",
  "created": "2017-11-04T19:09:56.428Z"
  },
  {
    "id": 4,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    "episode": [
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/51"
    ],
    "url": "https://rickandmortyapi.com/api/character/4",
    "created": "2017-11-04T19:22:43.665Z"
    },]

function App() {
  const [conteudo, setConteudo ] = useState(<>oi</>)

  //busca
  const [busca, setBusca ] = useState('');

  function translateStatus(status) {
    switch (status) {
      case "Alive":
        return "Vivo"

      case "unknown":
        return "Desconhecido"
      
      case "Dead":
        return "Morto"

      default:
        return status
    }
  }
  function translateGenero(gender){
    switch (gender) {
      case "Human":
        return "Humano"

      case "Alien":
        return "Alienígena"

        case "Robot":
          return "Robo"

      default:
        return gender

    }
  }
  function translateEspecies(species){
    switch (species) {
      case "Human":
        return "Humano"

      case "Alien":
        return "Alienígena"

      case "Robot":
        return "Robo"

      default:
        return species

    }
  }

  async function carregarTodosOsPersonagens(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const result = await fetch(
      "https://rickandmortyapi.com/api/character"+busca,
      requestOptions
    )
    
    .then(response => response.text())
    .then(result => {return result})
    .catch(error => console.log('error', error))

    const char = JSON.parse(result)
    
    return char.results
  }

  function teste() {
    alert('Você clicou no Personagem')
  }

  async function listaPersonagem(){
    const todosPersonagens = await carregarTodosOsPersonagens()
    
    return todosPersonagens.map(personagem => 
      <div className='card char' onClick={teste}>
        <img src={personagem.image} alt={personagem.name} />
        <h2>{personagem.name}</h2>
        <p>Especies: {translateEspecies(personagem.species)}</p>
        <p>Genero: {translateGenero(personagem.species)}</p>

        <b className='lista-secundaria'>Participaçoes: 
        {personagem.episode.map(ep => (
        <span key={personagem.name+(ep.split('episode/')[1])}>
          
          Ep-{(ep.split('episode/')[1])}
        </span>
        ))}
        </b>

        <p>Status: {translateStatus(personagem.status)}</p>
      </div>
    )
  }

  useEffect(() => {
    async function carregar(){
      setConteudo(await listaPersonagem())
    }
    carregar()
  },[busca])

  return (
    <div className="App">
      <header className="cabecalho">

        <h1>Rick and Morty API</h1>

      </header>

      <div className='filtros'>
        <span className='filtros-titulo'>Filtros</span>
        <div className='filtro status'>
          <b>Status:</b>
          <span onClick={() => setBusca('?status=live')}>Vivo</span>
          <span onClick={() => setBusca('?status=dead')}>Morto</span>
          <span onClick={() => setBusca('?status=unknown')}>Desconhecido</span>
        </div>
      </div>
      <div className='filtros'>
        <div className='filtro status'>
          <b>Generos:</b>
          <span onClick={() => setBusca('?gender=male')}>Masculino</span>
          <span onClick={() => setBusca('?gender=female')}>Feminino</span>
          <span onClick={() => setBusca('?gender=less')}>Sem genero</span>
          <span onClick={() => setBusca('?gender=unknown')}>Desconhecido</span>
        </div>
      </div>

      <div className='lista-principal'>
        { conteudo }
      </div>
    </div>
  );
}

export default App;
