import importlib
import os
import pkgutil

# Get the path to the current package
current_package = os.path.dirname(__file__)

# Iterate over all modules in the `utils` package
for module_info in pkgutil.iter_modules([current_package]):
    module_name = module_info.name
    if not module_name.startswith("_"):  # Ignore private modules
        # Import the module dynamically
        module = importlib.import_module(f"{__name__}.{module_name}")
        
        # Expose all callable attributes of the module
        for attr in dir(module):
            if not attr.startswith("_"):  # Ignore private attributes
                func = getattr(module, attr)
                if callable(func):  # Only expose callables
                    globals()[attr] = func

