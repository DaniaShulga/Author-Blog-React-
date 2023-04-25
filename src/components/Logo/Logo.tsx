import './Logo.scss'
import logo from 'assets/logo.png'

type Props = {}
const Logo = (props: Props) => {
    return (
        <div className="page__logo logo">
            <div className="logo__container container">
                <div className="logo__img">
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Logo
