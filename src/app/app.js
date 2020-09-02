import React, {useState, useEffect} from 'react';
import Rev from '../reveal/reveal'
import Reveal from 'reveal.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import RevealMath from 'reveal.js/plugin/math/math.esm.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'
//import 'reveal.js/dist/theme/black.css'

const App = (props) => {
    useEffect(() => {
        let deck = new Reveal({
            math: {
                mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
                config: 'TeX-AMS_HTML-full',
                // pass other options into `MathJax.Hub.Config()`
                TeX: { Macros: { RR: "{\\bf R}" } }
            },
            plugins: [ RevealMarkdown, RevealMath, RevealNotes, RevealHighlight ]
        }) 
        deck.initialize()
    }, [])
    return <Rev />
}

export default App;