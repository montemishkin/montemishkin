import marked from 'marked'
import {highlight} from 'highlight.js'


marked.setOptions({
    highlight: (code, lang) => highlight(lang, code).value,
})


export default marked
