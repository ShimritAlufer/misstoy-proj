 import { useRef } from "react";

 export function Home() {
    
     const h1Ref = useRef()

    return (
        <section className="home">
            <h1 ref={h1Ref}>Welcome to our Toys App</h1>
        </section>
    )
 }
