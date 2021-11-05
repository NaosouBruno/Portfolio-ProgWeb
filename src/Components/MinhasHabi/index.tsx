
import { Container, Content } from './styles';



export default function Header() {
    return (
        <Container>
            <Content>
                <div className="i">
                    <div>
                        <div className="i-left-wrapper">
                            <h2 className="i-intro">Olá, prazer em conhecer, eu sou</h2>
                            <h1 className="i-name">Bruno Silva</h1>
                            <div className="i-title">
                                <div className="i-title-wrapper">
                                    <div className="i-title-item">Desenvolvedor Front End</div>
                                    <div className="i-title-item">Prestativo</div>
                                    <div className="i-title-item">Editor de Videos</div>
                                    <div className="i-title-item">AINDA DESENVOLVENDO</div>
                                    <div className="i-title-item">NOVAS HABILIDADES</div>
                                </div>
                            </div>
                            <p className="i-desc">
                               Atualmente iniciando na carreira de Dev. Front End porém
                               querendo expandir meus conhecimentos para me aperfeçoar em novos
                               frameworks, por enquanto ainda tenho conhecimento de VueJS e React.
                            </p>
                        </div>
                    </div>
                </div>
            </Content>
        </Container>
    );
}
