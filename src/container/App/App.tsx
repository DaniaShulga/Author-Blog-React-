import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'
import ArticlesMenu from 'pages/ArticlesMenu/ArticlesMenu'
import BlogPage from 'pages/BlogPage/BlogPage'
import CategoriesArt from 'pages/CategoriesArt/CategoriesArt'
import CategoriesBook from 'pages/CategoriesBook/CategoriesBook'
import CategoriesKnowledge from 'pages/CategoriesKnowledge/CategoriesKnowledge'
import CategoriesWriting from 'pages/CategoriesWriting/CategoriesWriting'
import Contact from 'pages/Contact/Contact'
import Favourites from 'pages/Favourites/Favourites'
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
                        <Route path="/art" element={<CategoriesArt />} />
                        <Route path="/books" element={<CategoriesBook />} />
                        <Route
                            path="/writing"
                            element={<CategoriesWriting />}
                        />
                        <Route
                            path="/knowledge"
                            element={<CategoriesKnowledge />}
                        />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/blog/:id" element={<BlogPage />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default App
