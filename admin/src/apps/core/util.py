# third party imports
import mistune
from pygments import highlight
from pygments.lexers import get_lexer_by_name
from pygments.formatters import HtmlFormatter
from django.utils.text import slugify


class CustomRenderer(mistune.Renderer):
    '''
    Custom renderer for mistune.
    Enables code higlighting using pygments.
    Adds hash links to headers.
    See http://mistune.readthedocs.org/ for more info.
    '''
    def block_code(self, code, lang):
        if not lang:
            return '\n<pre><code>%s</code></pre>\n' % mistune.escape(code)
        lexer = get_lexer_by_name(lang, stripall=True)
        formatter = HtmlFormatter()
        return highlight(code, lexer, formatter)

    def header(self, text, level, raw):
        slug = slugify(text)
        return '<h{level} id="{slug}"><a href="#{slug}" class="anchor">{text}</a></h{level}>'.format(
            level=level,
            text=text,
            slug=slug
        )

    def autolink(self, link, is_email):
        return '<a href="{link}" target="_blank">{link}</a>'.format(link=link)

    def link(self, link, title, content):
        return '<a href="{link}" target="_blank" title="{title}">{content}</a>'.format(
            link=link,
            title=title,
            content=content
        )


# create a single reusable instance to increase performance
markdown = mistune.Markdown(renderer=CustomRenderer())
