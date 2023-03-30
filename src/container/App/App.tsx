import Blog from 'components/Blog/Blog'
import Blog2 from 'components/Blog2/Blog2'
import Blog3 from 'components/Blog3/Blog3'
import Blog4 from 'components/Blog4/Blog4'
import Blog5 from 'components/Blog5/Blog5'
import Blog6 from 'components/Blog6/Blog6'
import Blog7 from 'components/Blog7/Blog7'
import Blog8 from 'components/Blog8/Blog8'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import About from 'pages/About/About'
import ArticlesMenu from 'pages/ArticlesMenu/ArticlesMenu'
import CategoriesArt from 'pages/CategoriesArt/CategoriesArt'
import CategoriesBook from 'pages/CategoriesBook/CategoriesBook'
import CategoriesKnowledge from 'pages/CategoriesKnowledge/CategoriesKnowledge'
import CategoriesWriting from 'pages/CategoriesWriting/CategoriesWriting'
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
                        <Route path="/blog/1" element={<Blog />} />
                        <Route path="/blog/2" element={<Blog2 />} />
                        <Route path="/blog/3" element={<Blog3 />} />
                        <Route path="/blog/4" element={<Blog4 />} />
                        <Route path="/blog/5" element={<Blog5 />} />
                        <Route path="/blog/6" element={<Blog6 />} />
                        <Route path="/blog/7" element={<Blog7 />} />
                        <Route path="/blog/8" element={<Blog8 />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default App
