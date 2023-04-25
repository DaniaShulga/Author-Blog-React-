import InterestingInformation from 'components/InterestingInformation/InterestingInformation'
import Logo from 'components/Logo/Logo'
import './Home.scss'
import Posts from 'components/Posts/Posts'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Logo />
            <InterestingInformation />
            <Posts />
        </>
    )
}
export default Home
