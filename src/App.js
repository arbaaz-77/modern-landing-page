import React from 'react'
import './app.css'

import { Footer, Blog, Possibility, Features, Header, What } from './containers';
import { CTA, Navbar, Brand } from './components';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <What />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
