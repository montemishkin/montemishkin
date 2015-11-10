#!/usr/bin/env python3

'''
Provides django task management during development.
'''


if __name__ == '__main__':
    # python imports
    import os
    import sys
    # django imports
    from django.core.management import execute_from_command_line

    # load dev django settings
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.django.dev')

    # perform default action
    execute_from_command_line(sys.argv)
