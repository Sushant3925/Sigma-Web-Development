import {React ,useContext} from 'react'
import { counterContext } from '../Context/Context'
const Camponent = () => {
  const counter = useContext(counterContext)
  return (
    <div>
     {counter.count}
    </div>
  )
}

export default Camponent
