import re
import os

files_in_order = [
    'js/config.js',
    'js/state.js',
    'js/audio.js',
    'js/characters.js',
    'js/stars.js',
    'js/scenes/intro.js',
    'js/scenes/world.js',
    'js/scenes/home.js',
    'js/scenes/garden.js',
    'js/scenes/mailbox.js',
    'js/scenes/carnival.js',
    'js/scenes/lake.js',
    'js/scenes/castle.js',
    'js/scenes/finalSurprise.js',
    'js/app.js'
]

bundled_parts = [
    "/**\n * ANEA'S LITTLE UNIVERSE ♡\n * Standalone Distribution for GitHub Pages & Local file://\n */\n(function() {\n  \"use strict\";\n"
]

for fpath in files_in_order:
    with open(fpath, "r", encoding="utf-8") as f:
        code = f.read()
    # Strip import statements (single-line and multi-line)
    code = re.sub(r'import\s+[\s\S]*?from\s+[\'"][^\'"]+[\'"];?', '', code)
    # Strip export declarations
    code = re.sub(r'export\s+default\s+', '', code)
    code = re.sub(r'export\s*\{[\s\S]*?\};?', '', code)
    code = re.sub(r'export\s+(const|let|var|function|class)\s+', r'\1 ', code)
    bundled_parts.append(f"\n/* === Source: {fpath} === */\n")
    bundled_parts.append(code)

bundled_parts.append("\n})();\n")

bundle_code = "\n".join(bundled_parts)
with open("js/bundle.js", "w", encoding="utf-8") as f:
    f.write(bundle_code)

print("SUCCESS: js/bundle.js written, size:", len(bundle_code), "bytes")
