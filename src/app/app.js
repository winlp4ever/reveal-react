import React, {useState, useEffect} from 'react';
import Rev from '../reveal/reveal'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import 'reveal.js/dist/reveal.css'
//import 'reveal.js/dist/theme/black.css'

const App = (props) => {
    useEffect(() => {
        let deck = new Reveal({
            plugins: [ Markdown ]
        }) 
        deck.initialize()
    }, [])
    return <Rev />
}

export default App;