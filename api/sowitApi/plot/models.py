# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from django.db import models


class Plot(models.Model):
    name = models.CharField("Name", max_length=240)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
