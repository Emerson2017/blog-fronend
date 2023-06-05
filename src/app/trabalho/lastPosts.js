import style from './page.module.css'

export default function lastPosts({ posts }) {
    return (
        <section className={style.blogNews}>
            <div className={style.contentNews}>
                <span style={{width:"500px"}}><h2>Últimas do blog</h2></span> 

               {posts.map((post, index) =>
                    <RenderPost title={post.title} description={post.description} key={index} />
               )}
               
                <div className={style.news} style={{width: "500px", color: "#2f558d"}}>
                    <span>Ver tudo</span>
                </div>
            </div>
        </section>
    )
}

function RenderPost({title, description, key}) {
    return (
        <div className={style.news} key={key}>
            <span className={style.newsTitle}>{title}</span>
            <p className={style.newsDescription}>{description}</p>
        </div>
    )
}