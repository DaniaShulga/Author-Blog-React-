import header_logo from 'assets/header_logo.png'
import MenuItem from 'components/Menu/MenuItem'
import './Logo.scss'

type Props = {}
const Logo = (props: Props) => {
    return (
        <div className="logo_wrapper">
            <div className="logo_img">
                <MenuItem to="/">
                    <img src={header_logo} alt="header logo" />
                </MenuItem>
            </div>
        </div>
    )
}
export default Logo
