import {useEffect, useRef } from "react";

function OnScreen(props) {
    const viewElement = useRef(null);

    useEffect(() => {
        document.addEventListener("scroll", isInViewport);
        return () => {
            document.removeEventListener("scroll", isInViewport);
        };
    }, []);

    const isInViewport = () => {
        const top = viewElement.current.getBoundingClientRect().top;
        props.isInView(top <= window.innerHeight / 2 ? true : false);
    };

    return <section ref={viewElement}></section>;
}

export default OnScreen;
