import FooterItems from 'components/FooterItems/FooterItems'

type Props = {}
const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <div className="container">
                <FooterItems />
                <div className="footer_text">
                    <p className="footer_text">
                        Copyright @ Qode Interactive 2019
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
