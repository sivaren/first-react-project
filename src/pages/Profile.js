import { useEffect } from 'react';

export default function Profile () {
    useEffect(function () {
        document.title='Profile';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-desc">Saya adalah mahasiswa tingkat dua <span className="mainColor">Teknik Informatika</span>  di Institut Teknologi Bandung.
                Sekarang ini saya sedang tertarik pada bidang <span className="mainColor">Frontend Development.</span> 
            </p>
        </section>
    );
}