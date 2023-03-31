import Logo from 'components/Logo/Logo'
import './Favourites.scss'
import { useAppSelector } from 'redux/hooks'
import Articles from 'components/Articles/Articles'

type Props = {}
const Favourites = (props: Props) => {
    const test = useAppSelector((state) => state.productsLike)
    console.log(test)
    return (
        <>
            <Logo />
            <h2>Favourites</h2>
            <Articles />
        </>
    )
}
export default Favourites
