# misc third party imports
import mistune
from pygments import highlight
from pygments.lexers import get_lexer_by_name
from pygments.formatters import HtmlFormatter


class HighlightRenderer(mistune.Renderer):
    '''
    Custom renderer for mistune. Enables code higlighting using pygments.
    See http://mistune.readthedocs.org/ for more info.
    '''
    def block_code(self, code, lang):
        if not lang:
            return '\n<pre><code>%s</code></pre>\n' % mistune.escape(code)
        lexer = get_lexer_by_name(lang, stripall=True)
        formatter = HtmlFormatter()
        return highlight(code, lexer, formatter)

# create a single reusable instance to increase performance
markdown = mistune.Markdown(renderer=HighlightRenderer())


# end of file
