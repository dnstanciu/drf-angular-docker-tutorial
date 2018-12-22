# For getting the username from the JWT token.
from rest_framework_jwt.utils import jwt_decode_handler

def get_auth0_user_id_from_request(request):
    token = request.META.get('HTTP_AUTHORIZATION', '').split()[1]
    payload = jwt_decode_handler(token)
    return payload.get('sub')
