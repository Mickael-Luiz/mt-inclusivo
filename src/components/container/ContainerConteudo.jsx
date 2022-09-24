import { Route, Routes } from 'react-router-dom'
import Home from '../../paginas/home/Home'
import Teste from '../../paginas/test/Teste'
import './ContainerConteudo.scss'

export default function ContainerConteudo() {
    return (
        <div className="containerConteudo">
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/contato' element={<Teste/>} />
            </Routes>
        </div>
    )
}