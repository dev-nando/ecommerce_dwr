from django.contrib.auth.models import User
from django.core.management.base import BaseCommand, CommandParser
from django.conf import settings


class Command(BaseCommand):

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument('username', type=str)
        parser.add_argument('email', type=str)
        parser.add_argument('password', type=str)

    def handle(self, *args, **options):
        if User.objects.count() == 0:
            username = options.get('username')
            email = options.get('email')
            password = options.get('password')
            User.objects.create_superuser(username, email, password)
        else:
            print('Admin accounts can only be initialized if no Accounts exist')