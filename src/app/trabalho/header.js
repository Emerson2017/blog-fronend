import style from './page.module.css'
import Image from 'next/image'

export default function Header({srcImage, profileTitle, profileDescription}) {
    return (
        <section className={style.sectionHeader}>
            <header id={style.header}>
                <span>Blog</span>
                <span>Sobre</span>
                <span>Descrição</span>
            </header>
            <section className={style.sectionProfile}>
                <div className={style.contentProfilePincture}>
                    <Image 
                        src={srcImage}
                        width={200}
                        height={200}
                        alt="Profile Pincture"
                        id={style.profilePincture}
                    />
                </div>
                <div className={style.profileText}>
                    <h1 style={{fontSize: "40px"}}>{profileTitle}</h1>
                    <p>{profileDescription}</p>
                </div>
            </section>
        </section>
    )
}