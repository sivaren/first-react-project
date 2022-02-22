import { useEffect } from 'react';

export default function Profile () {
    useEffect(function () {
        document.title='Profile';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-desc">Saya adalah mahasiswa tingkat dua Teknik Informatika di Institut Teknologi Bandung.
                Sekarang ini saya sedang tertarik pada bidang Frontend Development.
            </p>
        </section>
    );
}