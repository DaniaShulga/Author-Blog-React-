import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    const closeMenu = () => {
        const iconMenu = document.querySelector('.menu__icon') as HTMLElement
        const menuBody = document.querySelector('.menu__body') as HTMLElement
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active')
        menuBody.classList.remove('_active')

        window.scrollTo(0, 0)
    }

    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? 'menu-item-active' : 'menu__link'
            }
            to={to}
            onClick={closeMenu}
        >
            {children}
        </NavLink>
    )
}
export default MenuItem
