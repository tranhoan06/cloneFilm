import {React, useState, useEffect} from "react";

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);

    const hanldeScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    }

    useEffect(() => {
        hanldeScrollY()
        window.addEventListener('scroll', hanldeScrollY);
        return () => {
        window.removeEventListener('scroll', hanldeScrollY);
        }
    }, []);
    return ([scrollY]);
}