
from django.conf.urls import url, include

from .views import PlotCreate, PlotList, PlotDetail, PlotUpdate, PlotDelete

urlpatterns = [
    url('create/', PlotCreate.as_view(), name='create-plot'),
    url('', PlotList.as_view()),
    url('<int:pk>/', PlotDetail.as_view(), name='retrieve-plot'),
    url('update/<int:pk>/', PlotUpdate.as_view(), name='update-plot'),
    url('delete/<int:pk>/', PlotDelete.as_view(), name='delete-plot')
]
