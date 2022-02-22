import { useEffect } from 'react';

export default function Home () {
    useEffect(function () {
        document.title='Home';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Selamat datang di web Rava!</h1>
            <p className="section-desc">Ini adalah project SPA saya pertama menggunakan ReactJS.</p>
        </section>
    );
}