from .models import Task
from .serializers import TaskSerializer

from rest_framework import generics

class TaskList(generics.ListAPIView):
    """
    View all tasks.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
