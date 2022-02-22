import { useEffect } from 'react';

export default function Home () {
    useEffect(function () {
        document.title='Home';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Selamat datang di Web Rava!</h1>
            <p className="section-desc">Ini adalah <span className="mainColor">Project SPA</span> pertama saya menggunakan <span className="mainColor">ReactJS.</span></p>
        </section>
    );
}