import Header from 'container/Header/Header'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from 'container/Footer/Footer'
import About from 'pages/About/About'
import Contact from 'pages/Contact/Contact'
import Favourites from 'pages/Favourites/Favourites'
import ArticlesMenu from 'pages/ArticlesMenu/ArticlesMenu'
import BlogPage from 'pages/BlogPage/BlogPage'

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="page">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/articles" element={<ArticlesMenu />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/blog/:id" element={<BlogPage/>} />
                        
                    </Routes>
            </main>
            <Footer/>
        </div>
    )
}
export default App
