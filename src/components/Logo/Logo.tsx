import header_logo from 'assets/header_logo.png'
import './Logo.scss'

type Props = {}
const Logo = (props: Props) => {
    return (
        <div className="logo_wrapper">
            <div className="logo_img">
                <a href="./Header.tsx">
                    <img src={header_logo} alt="header logo" />
                </a>
            </div>
        </div>
    )
}
export default Logo
