import Articles from 'components/Articles/Articles'
import Aside from 'components/Aside/Aside'
import InterestingInformation from 'components/InterestingInformation/InterestingInformation'
import Logo from 'components/Logo/Logo'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <Logo />
            <InterestingInformation />
            <Articles />
        </div>
    )
}
export default Home
