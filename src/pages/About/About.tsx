import AboutTheAuthor from 'components/AboutTheAuthor/AboutTheAuthor'
import Logo from 'components/Logo/Logo'
import PublishedBooks from 'components/PublishedBooks/PublishedBooks'

type Props = {}
const About = (props: Props) => {
    return (
        <>
            <Logo />
            <AboutTheAuthor />
            <PublishedBooks />
        </>
    )
}
export default About
