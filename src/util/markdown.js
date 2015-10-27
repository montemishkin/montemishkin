import marked from 'marked'
import {highlight} from 'highlight.js'


// see: https://github.com/chjj/marked#options-1
marked.setOptions({
    breaks: true,
    // see: http://highlightjs.readthedocs.org/en/latest/api.html#highlight-name-value-ignore-illegals-continuation
    highlight: (code, lang) => highlight(lang, code, true).value,
})


export default marked
