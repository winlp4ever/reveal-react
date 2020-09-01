import React, {Component} from "react"
import ReactDOM from "react-dom"
//import "./_reveal-styles.scss"
import App from './app/app'
import $ from 'jquery'
import { initializeIcons } from '@uifabric/icons'
initializeIcons()

import 'reveal.js/dist/reveal.css'
import './_my-reveal.scss'

function renderWeb() {
    ReactDOM.render(<App />, document.getElementById('main'))
}
renderWeb()


if (module.hot) {
    console.log('what fuct')
    module.hot.accept(
        [
            './app/app', 
        ], () => {
            console.log('what s up')
            renderWeb()
        }
    )
    module.hot.accept()
}