# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Plot
from rest_framework import generics
from .serializers import PlotSerializer


class PlotCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new plot
    queryset = Plot.objects.all(),
    serializer_class = PlotSerializer


class PlotList(generics.ListAPIView):
    # API endpoint that allows plots to be viewed.
    queryset = Plot.objects.all()
    serializer_class = PlotSerializer


class PlotDetail(generics.RetrieveAPIView):
    # API endpoint that returns a single plot by pk.
    queryset = Plot.objects.all()
    serializer_class = PlotSerializer


class PlotUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a plot record to be updated.
    queryset = Plot.objects.all()
    serializer_class = PlotSerializer


class PlotDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a customer record to be deleted.
    queryset = Plot.objects.all()
    serializer_class = PlotSerializer
