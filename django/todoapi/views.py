from .models import Task
from .serializers import TaskSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

class TaskList(APIView):
    """
    View all tasks.
    """
    def get(self, request, format=None):
        """
        Return a list of all tasks.
        """
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
