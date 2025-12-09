import React, {useEffect} from 'react';

function useMagicColor() {
    const [color, setColor] = React.useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const color = Math.floor(Math.random() * 999999);
            setColor(`#${color}`);
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, []);


    return color
}

export {useMagicColor};