"""
View for Login
"""

from django.http import HttpResponseRedirect

from rest_framework.response import Response
from rest_framework.settings import api_settings
from rest_framework.views import APIView

from knox.models import AuthToken
from knox.settings import knox_settings

from .serializers import ( LogInSerializer, )

KNOXUSERSERIALIZER = knox_settings.USER_SERIALIZER


class LoginView(APIView):

    """
    Login View
    """
    authentication_classes = api_settings.DEFAULT_AUTHENTICATION_CLASSES
    serializer_class = LogInSerializer

    def post(self, request, format=None):  # pylint: disable=redefined-builtin
        """"
        Post method for login.
        """
        serializer = LogInSerializer(
            data=request.data, context={'request': request})

        if serializer.is_valid(raise_exception=True):
            # User.objects.get(username=serializer.data.get('username'))
            token = AuthToken.objects.create(request.user)
            return Response({
                "user": KNOXUSERSERIALIZER(request.user).data,
                "token": token,
            })
            
        else:
            return Response({"data": serializer.errors})
