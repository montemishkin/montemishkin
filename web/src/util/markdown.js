// third party imports
import marked from 'marked'
import hljs from 'highlight.js'
import slugify from 'lodash/string/kebabCase'


const renderer = new marked.Renderer()


renderer.heading = function heading(text, level) {
    const slug = slugify(text)
    return `<h${level} id="${slug}"><a href="#${slug}" class="anchor">${text}</a></h${level}>`
}


renderer.link = function link(href, title, text) {
    const titleAttr = title ? ` title="${title}"` : ''
    return `<a href="${href}" target="_blank"${titleAttr}>${text}</a>`
}


function highlight(code, lang) {
    return lang
        ? hljs.highlight(lang, code, true).value
        : hljs.highlightAuto(code).value
}


// DO NOT render untrusted content!!
export default function markdown(content) {
    return marked(content, {
        breaks: true,
        renderer,
        highlight,
        // e.g. "hljs hljs-lang-py"
        langPrefix: 'hljs hljs-lang-',
    })
}
