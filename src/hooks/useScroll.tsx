import { useRef } from "react";

function useScroll() {
    const myRef = useRef<HTMLElement | null>(null);

    const scroll = () => myRef.current?.scrollIntoView({ behavior: "smooth" });
    return { myRef, scroll };
}

export default useScroll;