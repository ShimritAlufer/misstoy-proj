import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LoginSignup } from './LoginSignup.jsx'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { login, logout, signup } from '../store/user/user.actions.js'

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()

    async function onLogin(credentials) {
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }

    async function onSignup(credentials) {
        try {
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user:${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }

    async function onLogout() {
        try {
            await logout()
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }

    return (
        <header className='app-header'>
            <section className="container">
                {/* <button onClick={() => navigate(-1)}>Back</button> */}
                <nav>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/toy' >Toys</NavLink>
                </nav>

                <span className='logo'>Miss Toy - World of Fun!</span>
            </section>
            <section className="container">
                {user &&
                    <span className="user-info">
                        {user.imgUrl && <img src={user.imgUrl} />}
                        {user.fullname}
                        <button onClick={onLogout}>Logout</button>
                    </span>
                }
                {!user &&
                    <div className="user-info">
                        <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                    </div>
                }
            </section>
        </header>
    )
}