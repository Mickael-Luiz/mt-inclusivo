import { Avatar } from 'primereact/avatar';

import 'primeicons/primeicons.css';
import './SideBar.scss'
import { Menu } from '../menu/Menu';


export default function SideBar() {

  return (
    <div className="sideBar">
      <div className='perfil'>
        <Avatar label="U" className="mr-2" size="xlarge" shape="circle" style={{backgroundColor: '#1596a9', color: '#ffffff'}} />
        <span className='user'>Usuário <i className="pi pi-user-edit" style={{'fontSize': '1em'}}></i></span>
      </div>
      <div className='containerLista'>
          <Menu />
      </div>
      <div className='copy'>
        <span>©Copyright</span>
      </div>
    </div>
  )
}