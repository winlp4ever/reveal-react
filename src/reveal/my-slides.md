## Answer Evaluation & Extraction



### Answer Evaluation
A small reminder on how TANDA works: Given a pair $\(q, d\)$ with $q$ a question and $d$ a document, TANDA will output a loss and a probability on how this pair forms a good question - answer.
$$\(q, d\)\mapsto f(q, d)$$



* If the document is short enough, apply directly TANDA to the document.
* Also, use `spacy` to separate the document into different sentences, and apply TANDA to each sentence. Retrieve the phrase with lowest loss as highlight.



### Answer Extraction
* __Before:__ When scraping the website, we select paragraph that contains keywords contained in the answer snippets.
* __After:__ Split the website into sentences with `spacy`, then find the highlights with TANDA and select paragraphs or document parts where located the highlights. 



### Limits (of all approaches)
* All approaches passed through `html2text` parser. The websites are, most of the time, a lot longer and contain unnecessary informations than what we see. Maybe a trick: `html` $\mapsto$ `pdf` $\mapsto$ `text`. 
* Doesn't work well on _coding questions_. Should we categorize questions into coding/non-coding and then for coding questions, try to search and rank the code blocks appearing in the page.