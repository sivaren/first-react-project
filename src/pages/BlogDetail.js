import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Contact () {
    const urlParams = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [NotFound, setNotFound] = useState(false);

    useEffect(function () {        
        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${urlParams.id}`);
            
            if(!request.ok) {
                setLoading(false);
                return setNotFound(true);
            }

            const response = await request.json();
            document.title = response.title;

            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [urlParams]);

    if (NotFound) {
        return <div> <h1 className="not-found">Artikel Tidak Ditemukan 404</h1> </div>;
    }

    return (
        <section className="section">
            {loading ? (<i>Loading article ...</i>) 
            : ( 
                <div className="article">
                    <h1 className="article-title">{article.title}</h1>
                    <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <img className="article-image" src={article.imageUrl} alt={article.title} />
                    <p className="article-summary">{article.summary}</p>
                    <p className="article-source">Source: <a className="linkText" href={article.url} target="_blank" rel="noreferrer">
                        {article.newsSite} </a> 
                    </p>
                </div>
            )}
        </section>
    );
}
