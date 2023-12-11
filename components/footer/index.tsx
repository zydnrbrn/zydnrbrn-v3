'use client'
import { useEffect, useState } from 'react';

const Footer = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            const options = { timeZone: 'Asia/Jakarta', timeStyle: 'short' as const };
            const formatter = new Intl.DateTimeFormat('en-US', options);
            setTime(`Bandung, ${formatter.format(date)}`);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <footer className="w-full flex items-center justify-center py-3 text-current">
            <p>{time}</p>
        </footer>
    );
};

export default Footer;