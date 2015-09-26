'''
Project level views.
'''

# django imports
from django.views.generic import TemplateView


class Home(TemplateView):
    '''
    Render the index template.
    '''
    template_name = 'index.html'


# end of file
