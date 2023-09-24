import { FC } from 'react'
import { Person, HairColor } from './components/Person'
import './App.css'

const App: FC = () => {
  return (
    <div className='App'>
      <Person 
      name="Lislain"
      age = {21}
      email = "cllislain@gmail.com"
      hairColor={HairColor.Pink}/>
    </div>
  )
}

export default App