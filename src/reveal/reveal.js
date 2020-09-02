import React, { useState, useEffect } from 'react'

const Rev = (props) => {
    const content = `
        <section data-markdown data-separator="^\\n\\n\\n">
            <textarea data-template>
                ## Slide 1
                A paragraph with some text and a [link](http://hakim.se).
                * $x + y$
                * Hello everyone, hope you're doing ok

                

                ## Slide 2
                what's going on here
                


                ## Slide 3
            </textarea>
        </section>
    `
    return <div className="slides" dangerouslySetInnerHTML={{__html: content}}>
    </div>
}

export default Rev