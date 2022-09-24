import { useRecoilState } from 'recoil';
import cardEducacao from '../test/atomCards';

import './Home.scss'
import CardEducacao from '../../components/cards/CardEducacao';

export default function Home() {

  // const listaDeTopicos = [
  //   { label: 'Educação', icon: PrimeIcons.BOOK, key: 6 },
  //   { label: 'Saúde', icon: PrimeIcons.PLUS, key: 7 },
  //   { label: 'Transporte Coletivo', icon: PrimeIcons.CAR, key: 8 },
  //   { label: 'Trabalho', icon: PrimeIcons.BRIEFCASE, key: 9 },
  //   { label: 'Leis Gerais', icon: PrimeIcons.TH_LARGE, key: 10 }
  // ]

  const [visibleCardEducacao, setVisibleCardEducacao] = useRecoilState(cardEducacao)

  function showCardEducacao() {
    setVisibleCardEducacao(!visibleCardEducacao)
  }


  return (
    <div className='containerHome'>
      <div className='listaDeLeis'>
        <div className='opcaoDeLei' onClick={showCardEducacao} >
          <i className='pi pi-book'></i>
          <label>Educação</label>
        </div>
        <div className='opcaoDeLei' onClick={showCardEducacao} >
          <i className='pi pi-plus'></i>
          <label>Saúde</label>
        </div>
        <div className='opcaoDeLei' onClick={showCardEducacao} >
          <i className='pi pi-car'></i>
          <label>Transporte Coletivo</label>
        </div>
        <div className='opcaoDeLei' onClick={showCardEducacao} >
          <i className='pi pi-briefcase'></i>
          <label>Trabalho</label>
        </div>
        <div className='opcaoDeLei' onClick={showCardEducacao} >
          <i className='pi pi-th-large'></i>
          <label>Leis Gerais</label>
        </div>
      </div>

      <CardEducacao />

      {/* <ul className='listaTopicos'>
        {listaDeTopicos.map(item =>
          <div className='opcaoTopico' key={item.key}>
            <i className={item.icon}></i>
            <label>{item.label}</label>
          </div>)}
      </ul> */}


      <div className='containerWindows'>
        <div className='gifWindow'>
        </div>
        <div className='gifWindow'>
        </div>
      </div>


    </div>
  )
}