import { useRecoilState } from "recoil"
import { Dialog } from 'primereact/dialog';
import cardEducacao from "../../paginas/test/atomCards"


import './CardEducacao.scss'

function CardEducacao() {

    const [visibleCardEducacao, setVisibleCardEducacao] = useRecoilState(cardEducacao)



    return (
        <Dialog header="Header" visible={visibleCardEducacao} onHide={() => setVisibleCardEducacao(!visibleCardEducacao)} style={{ width: '50vw' }}>
            <p className="texto">Aqui serão disponibilizados as 3 categorias de cada breviário referente ao tópico escolhido pelo usuário</p>
        </Dialog>
    )
}
export default CardEducacao