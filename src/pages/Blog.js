import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Blog () {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        document.title = "Blog"
        
        async function getArticle() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }
        getArticle();
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-desc">Berikut terdapat beberapa tulisan yang diambil dari suatu <a className="linkText" href="https://api.spaceflightnewsapi.net/v3/articles" target="_blank">API.</a>
            </p>

            {loading ? (<i>Loading articles ...</i>) 
            : ( 
                <div className="articles">
                    {articles.map(function (article) {
                        return (
                            <article key={article.id} className="article"> 
                                <h2 className="article-title"> <Link className="linkText" to={`/blog/${article.id}`}> {article.title} </Link>  </h2>
                                <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    );
}