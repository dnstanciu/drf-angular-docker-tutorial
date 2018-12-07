from .models import Task
from .serializers import TaskSerializer

from rest_framework import status
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

    def post(self, request, format=None):
        """
        Create a task.
        """
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
