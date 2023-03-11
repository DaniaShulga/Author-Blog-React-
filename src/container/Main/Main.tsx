import './Main.scss'
import './Reset.scss'
import header_logo from 'assets/header_logo.png'

type Props = {}
const Main = (props: Props) => {
    return (
        <main className="main">
            <div className="container">
                <div className="logo_wrapper">
                    <div className="logo_img">
                        <a href="./Header.tsx">
                            <img src={header_logo} alt="header logo" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main
