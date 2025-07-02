// import { useContext, useRef } from "react";
// import { animateCSS, utilService } from "../services/util.service";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { useToggle } from "../customHooks/useToggle";

// export function Home() {
//     const { toggleTheme } = useContext(ThemeContext)

//     const [isShow, toggleIsShow] = useToggle(false)
    
//     const h1Ref = useRef()
//     const imgRef = useRef()

//     async function onActivateAnimation() {
//         await animateCSS(h1Ref.current, 'jello')
//         animateCSS(imgRef.current, 'rotateOut', false)

//     }

//     return (
//         <section className="home">
//             <section >
//                 <button onClick={onActivateAnimation}>Activate</button>
//                 <button onClick={toggleTheme}>Toggle Theme</button>
//             </section>
//             <h1 ref={h1Ref}>Welcome to our Toys App</h1>
//             <img onClick={toggleIsShow} ref={imgRef} src='./vite.svg' />
//             {isShow && <div style={{ backgroundColor: 'red' }} >ajkasdbhjkasdjasdga</div>}
//         </section>
//     )
// }
