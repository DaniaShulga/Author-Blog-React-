import { Link } from 'react-router-dom'
import './Logo.scss'
import logo from 'assets/logo.png'

type Props = {}
const Logo = (props: Props) => {
    return (
        <div className="page__logo logo">
            <div className="logo__container container">
                <div className="logo__img">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Logo
