"""
urls for social
"""

from django.conf.urls import (url)
from .views import (Social)

urlpatterns = [
    url(r'', Social.as_view(), name='social')

]
