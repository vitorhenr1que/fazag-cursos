import Image from "next/image";
import fazag from '../../../../public/fazag.png'
import biblioteca from '../../../../public/photos/biblioteca02.jpg'
import colacao from '../../../../public/photos/colacao.jpg'
import lab05 from '../../../../public/photos/lab05.jpg'
import lab06 from '../../../../public/photos/lab06.jpg'
import styles from './style.module.scss'

const photos = [
  { src: fazag, alt: 'Prédio da FAZAG', active: true },
  { src: lab05, alt: 'Laboratório da FAZAG' },
  { src: lab06, alt: 'Aula prática em laboratório da FAZAG' },
  { src: biblioteca, alt: 'Biblioteca da FAZAG' },
  { src: colacao, alt: 'Cerimônia de colação de grau da FAZAG' },
]

export function Slide(){
    return (
        <section className={styles.slideContainer} aria-labelledby="fotos-fazag">
            <p className={styles.titleCarousel} id="fotos-fazag">Confira ambientes e momentos da FAZAG</p>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className={`carousel-inner ${styles.carouselDiv}`} >
                    {photos.map((photo) => (
                        <div className={`carousel-item ${photo.active ? 'active' : ''} ${styles.imgCarouselDiv}`} key={photo.alt}>
                            <Image
                                src={photo.src}
                                className="d-block w-100"
                                fill
                                quality={78}
                                sizes="(max-width: 768px) 100vw, 1180px"
                                style={{ objectFit: 'cover' }}
                                alt={photo.alt}
                            />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
        </section>
    )
}
