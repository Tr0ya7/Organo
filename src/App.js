import { useState } from 'react'
import Banner from './components/banner'
import Form from './components/form'
import Teams from './components/teams'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82cffa',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#a6d157',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#db6ebf',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#ffba05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#ff8a29',
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'Luiz Henrique de Souza Barros',
      staff: 'Dev. jr',
      image: 'https://github.com/Tr0ya7.png',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'Matheus',
      staff: 'Dev. jr',
      image: 'https://github.com/parra666.png',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'Nword',
      staff: 'Dev. jr',
      image: 'https://github.com/Nword.png',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'Eu',
      staff: 'Dev. jr',
      image: 'https://github.com/eu.png',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'Sigma',
      staff: 'Dev. jr',
      image: 'https://github.com/sigma.png',
      team: teams[5].name
    },
  ]

  const [peoples, setPeoples] = useState(inicial)

  function onDelete(props) {
    console.log('click no deletar: ', props)
  }

  function onChangeColor(color, id) {
    setTeams(teams.map(team => {
      //esse if mostra que a cor do campo que deve ser alterado é igual o nome do campo com a cor alterada -> 
      //assim filtrando o campo pelo nome / mas caso algum campo tiver o mesmo nome ele também é alterado
      if (team.id === id) {
        team.color = color
      }

      return team
    }))
  }
  
  return (
    <div className="App">
      <Banner />
      <Form teams={ teams.map(team => team.name) } submit={ value => setPeoples([...peoples, value]) } />
      { teams.map( team => 
        <Teams
          key={ team.name }
          secondColor={ team.color }
          name={team.name}
          id={team.id}
          primaryColor={ team.color }
          onChangeColor={ onChangeColor }
          onClick={ onDelete }
          peoples={ peoples.filter(value => value.team === team.name) }
        /> ) }
    </div>
  )
}

export default App