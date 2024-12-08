import os
import importlib

# Get the directory of the current file
current_dir = os.path.dirname(__file__)

# Dynamically import all Python files in the forms directory except __init__.py
for filename in os.listdir(current_dir):
    if filename.endswith('.py') and filename != '__init__.py':
        module_name = f"{__name__}.{filename[:-3]}"  # Remove .py extension
        importlib.import_module(module_name)
