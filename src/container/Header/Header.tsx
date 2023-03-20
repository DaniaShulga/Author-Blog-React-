import Menu from 'components/Menu/Menu'

type Props = {}
const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <Menu />
            </div>
        </header>
    )
}
export default Header
