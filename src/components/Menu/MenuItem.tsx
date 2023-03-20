import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? 'menu-item-active' : 'menu-item'
            }
            to={to}
        >
            {children}
        </NavLink>
    )
}
export default MenuItem
