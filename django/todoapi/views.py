from .models import Task
from .serializers import TaskSerializer

from rest_framework import generics

from .utils import get_auth0_user_id_from_request

from rest_framework.permissions import IsAuthenticated
from .permissions import IsCreator

# Lists and Creates entries of Task.
class TaskList(generics.ListCreateAPIView):
    """
    Lists and creates tasks.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        auth0_user_id = get_auth0_user_id_from_request(self.request)
        # Set the user to the one in the token.
        serializer.save(created_by=auth0_user_id)

    def get_queryset(self):
        """
        This view should return a list of all Tasks
        for the currently authenticated user.
        """
        auth0_user_id = get_auth0_user_id_from_request(self.request)
        return Task.objects.filter(created_by=auth0_user_id)

# Return a single Task and allows its update and deletion.
class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Returns a single Task and allows updates and deletion of a Task.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated,IsCreator]
    lookup_url_kwarg = 'task_id'
