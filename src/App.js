import { useState } from 'react'
import Banner from './components/banner'
import Form from './components/form'
import Teams from './components/teams'

function App() {
  const teams = [
    {
      name: 'Programação',
      firstColor: '#57c278',
      secondColor: '#d9f7e9'
    },
    {
      name: 'Front-End',
      firstColor: '#82cffa',
      secondColor: '#e8f8ff'
    },
    {
      name: 'Data Science',
      firstColor: '#a6d157',
      secondColor: '#f0f8e2'
    },
    {
      name: 'UX e Design',
      firstColor: '#db6ebf',
      secondColor: '#fde7e8'
    },
    {
      name: 'Mobile',
      firstColor: '#ffba05',
      secondColor: '#fff5d9'
    },
    {
      name: 'Inovação e Gestão',
      firstColor: '#ff8a29',
      secondColor: '#ffeedf'
    },
  ]

  const [infos, setInfo] = useState([])

  function submit(info) {
    setInfo([...infos, info])
  }
  
  return (
    <div className="App">
      <Banner />
      <Form teams={ teams.map(team => team.name) } submit={ value => submit(value) } />
      { teams.map( team => 
        <Teams
          key={ team.name } 
          secondColor={ team.secondColor } 
          primaryColor={ team.firstColor } 
          inf={ infos.filter(value => value.team == team.name) }
        >
          { team.name }
        </Teams>) }
    </div>
  )
}

export default App