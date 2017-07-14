"""
Serializer for Authentication functions
"""

from datetime import datetime
import base64
import hashlib

from django.conf import settings
from django.contrib.auth import (authenticate, login)

from rest_framework import serializers

class LogInSerializer(serializers.Serializer):
    """
    Serializer for login data.
    """
    username = serializers.CharField(allow_blank=True)
    password = serializers.CharField(allow_blank=True)

    def validate(self, data):
        try:
            user = authenticate(**data)
            login(self.context['request'], user)
            return user
        except Exception as e:  # pylint: disable=invalid-name
            print(e)
            raise serializers.ValidationError('Invalid Username or Password.')

    def create(self, *a, **k):
        pass

    def update(self, *a, **k):
        pass
