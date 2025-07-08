import { useDispatch, useSelector } from "react-redux"
import { SET_MODAL_DATA } from "../store/app/app.reducer.js"

export function DynamicModal() {
    const modalData = useSelector(storeState => storeState.appModule.modalData)
    const dispatch = useDispatch()

    function onCloseModal() {
        dispatch({ type: SET_MODAL_DATA, modalData: null })
    }

    if (!modalData) return null
    return (
        <>
            <section onClick={onCloseModal} className='modal-backdrop'></section>
            <section className='modal-content'>
                <section style={{ textAlign: 'center' }}>
                    <h2>Hello</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quaerat eum neque veniam rerum nostrum perspiciatis numquam repellat, aliquam autem, consequuntur dolorem nobis dolore vel odit architecto incidunt itaque inventore!</p>
                </section>
                <button className='btn close-btn' onClick={onCloseModal}>X</button>
            </section>
        </>
    )
}

