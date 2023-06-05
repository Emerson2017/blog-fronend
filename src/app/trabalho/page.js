import imgProfile from './assets/goku.png'
import Header from './header'
import LastPosts from './lastPosts'
import Posts from './posts.json'

export default function Home() {
    return (
      <main>
        <Header 
            srcImage={imgProfile}
            profileTitle="Oi, eu sou Goku!"
            profileDescription="Son Goku (孫悟空 Son Gokū?, mais conhecido apenas como Goku), cujo nome de nascimento é Kakarotto (カカロット Kakarotto?), é o protagonista da franquia Dragon Ball, criada por Akira Toriyama. Sua primeira aparição ocorreu no primeiro capítulo do mangá Dragon Ball, intitulado Bulma e Son Goku (em japonês: ブルマと孫悟空 Buruma to Son Gokū?), publicado na revista Weekly Shōnen Jump em 3 de dezembro de 1984.[3] Goku é inspirado num personagem com o mesmo nome, 孫 悟空 (lê-se Sun Wukong em mandarim e Son Goku em japonês), personagem principal do romance chinês Jornada ao Oeste."
        />
        <LastPosts posts={Posts}/>
      </main>
    )
  }