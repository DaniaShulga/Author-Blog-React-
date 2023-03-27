import { NavLink } from 'react-router-dom'

type Props = {
    to: string
    children: React.ReactNode
}
const FooterNav = ({ to, children }: Props) => {
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
export default FooterNav
