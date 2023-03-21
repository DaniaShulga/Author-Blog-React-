import Articles from 'components/Articles/Articles'
import InterestingInformation from 'components/InterestingInformation/InterestingInformation'
import Logo from 'components/Logo/Logo'
import NewsLetter from 'components/NewsLetter/NewsLetter'
import Purchase from 'components/Purchase/Purchase'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Logo />
            <InterestingInformation />
            <Articles />
            <NewsLetter />
            <Purchase />
        </>
    )
}
export default Home
