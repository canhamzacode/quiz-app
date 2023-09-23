import NavBar from '../components/NavBar'
import {Outlet} from "react-router-dom"


const AppLayout = () => {
  return (
    <div className='full'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout