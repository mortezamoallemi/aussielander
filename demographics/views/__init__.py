import importlib
import os
import pkgutil

current_package = os.path.dirname(__file__)
for module_info in pkgutil.iter_modules([current_package]):
    module_name = module_info.name
    if not module_name.startswith("_"):
        module = importlib.import_module(f"{__name__}.{module_name}")
        # Add all callable views in the module to the namespace
        for attr in dir(module):
            if not attr.startswith("_"):  # Ignore private attributes
                view = getattr(module, attr)
                if callable(view):  # Only expose callables
                    globals()[attr] = view
