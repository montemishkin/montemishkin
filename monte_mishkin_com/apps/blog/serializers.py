# restframework imports
from rest_framework import serializers
# misc third party imports
import mistune
from pygments import highlight
from pygments.lexers import get_lexer_by_name
from pygments.formatters import HtmlFormatter
# local imports
from .models import BlogPost


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


class BlogPostSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    content = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return [{'id': tag.id, 'name': tag.name} for tag in obj.tags.all()]

    def get_content(self, obj):
        return markdown(obj.content)

    class Meta:
        model = BlogPost


# end of file
