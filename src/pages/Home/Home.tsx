import Articles from 'components/Articles/Articles'
import InterestingInformation from 'components/InterestingInformation/InterestingInformation'
import Logo from 'components/Logo/Logo'
import NewsLetter from 'components/NewsLetter/NewsLetter'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <Logo />
            <InterestingInformation />
            <Articles />
            <NewsLetter />
        </div>
    )
}
export default Home
