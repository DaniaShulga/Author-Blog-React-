import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'
import ArticlesMenu from 'pages/ArticlesMenu/ArticlesMenu'
import Contact from 'pages/Contact/Contact'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/articles" element={<ArticlesMenu />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default App
