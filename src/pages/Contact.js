import { useEffect } from 'react';

export default function Contact () {
    useEffect(function () {
        document.title='Contact';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-desc">Kalian dapat menghubungi saya melalui</p>
            <ul>
                <li>WA: 089611112222</li>
                <li>Email: rava.naufal2014@gmail.com</li>
            </ul>
            <p className="section-desc">Atau dapat melalui sosial media saya</p>
            <ul>
                <li> <a className="linkText" href="https://www.instagram.com/ravaattar/" target="_blank">Instagram</a> </li>
                <li> <a className="linkText" href="http://twitter.com" target="_blank">Twitter</a> </li>
            </ul>
        </section>
    );
}