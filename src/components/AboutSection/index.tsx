import { Link } from 'react-scroll'
import styles from './styles.module.scss'

export function AboutSection() {
    return (
        <>
            <div className={styles.sideDash}></div>
            
            <div className={styles.aboutContainer} id="about">
                <div className={styles.content}>
                    <div className={styles.aboutText}>
                        <h1>DESIGN</h1>
                        
                        <p>O empreendimento possui 4 apartamentos de dois dormitórios por andar, com uma ou duas vagas de garagem.</p>

                        <p>Para o seu lazer, o prédio dispõe de piscina e deck, além de salão de festas e espaço gourmet. Os medidores de água, luz e gás são individuais, e há um gerador de energia para as áreas comuns. 
                        A fachada frontal Érico Veríssimo é revestida com pastilhas e pintura texturizada. O lobby de entrada conta com pé direito duplo e 2 elevadores.
                        O prédio ainda possui portaria 24 horas, além de um apartamento para uso do zelador. </p>

                        <p>Nosso compromisso é construir com foco na satisfação dos clientes, na sustentabilidade e na qualidade do produto, através da confiança em seus funcionários e parceiros, buscando meelhorar continuamente seus processos. </p>

                        <h2>HÁ 45 ANOS VOCÊ PODE CONTAR COM A QUALIDADE DA EMI.</h2>
                    </div>
                </div>
            </div>

            <div className={styles.specsContainer}>
                <main>
                    <img src="/images/interior-img-1.webp" id={styles.interior} alt="interior img" />

                    <div className={styles.list}>
                        <div className={styles.listTitle}>
                            <img src="/images/map-pointer.svg" alt="pointer" />

                            <h2>A 15 MINUTOS DE <br /> SHOPPING PRAIA DE BELAS</h2>
                        </div>

                        <div className={styles.listItems}>
                            <ul>
                                <div className={styles.first}>Apartamentos de 70,13m² (Andares altos)</div>
                                <div className={styles.listSpan}>2 Dormitórios</div>
                                <div className={styles.listSpan}>Vagas de Garagem</div>
                                <li>Salão de Festas</li>
                                <li>Espaço Gourmet</li>
                                <li>Piscina com Deck Molhado</li>
                                <li>Portaria 24h</li>
                                <li>Gerador de Energia</li>
                            </ul>
                        </div>
                    </div>
                </main>

                <footer>
                    <button>
                        <Link to="home" smooth={ true }>AGENDE SUA VISITA</Link>
                    </button>
                </footer>
            </div>
        </>
    )
}