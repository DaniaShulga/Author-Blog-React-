import { NavLink } from 'react-router-dom'

type Props = {
    to: string
    children: React.ReactNode
}
const AsideItem = ({ to, children }: Props) => {
    return <NavLink to={to}>{children}</NavLink>
}
export default AsideItem
