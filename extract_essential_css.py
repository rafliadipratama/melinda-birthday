#!/usr/bin/env python3
"""Extract essential CSS that Tailwind can't handle."""

import re

# Read CSS
with open('css_extract.txt', 'r') as f:
    css = f.read()

# List of patterns to KEEP (what Tailwind can't do)
keep_patterns = [
    r'@keyframes\s+\w+\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\}',  # All keyframes
    r'clip-path\s*:[^;]+;',  # Clip-path
    r'perspective\s*:[^;]+;',  # 3D perspective
    r'transform-origin\s*:[^;]+;',  # Transform origin
    r'filter\s*:[^;]+;',  # Complex filters
    r'backdrop-filter\s*:[^;]+;',  # Backdrop filter
    r'-webkit-backdrop-filter\s*:[^;]+;',  # WebKit backdrop filter
    r'content\s*:[^;]+;',  # Content for ::before/::after
    r'background-image\s*:\s*(?:url\(|linear-gradient\(|radial-gradient\()',  # Complex backgrounds
    r'box-shadow\s*:[^;]*(?:inset[^;])*;',  # Complex shadows
    r'text-shadow\s*:[^;]+;',  # Text shadows
    r'animation\s*:[^;]+;',  # Animation references
]

essential_css = []
lines = css.split('\n')
in_keyframe = False
in_rule = False
current_rule = []

for line in lines:
    # Check if we're starting a keyframe
    if '@keyframes' in line:
        in_keyframe = True
        current_rule = [line]
    # Check if we're ending a keyframe
    elif in_keyframe and line.strip() == '}':
        current_rule.append(line)
        essential_css.append('\n'.join(current_rule))
        in_keyframe = False
        current_rule = []
    # Inside keyframe
    elif in_keyframe:
        current_rule.append(line)
    # Check for essential CSS patterns
    else:
        # Keep lines with clip-path, filter, backdrop-filter, content, animation
        if any(pattern in line.lower() for pattern in [
            'clip-path', 'filter:', 'backdrop-filter', 'content:', 'animation:',
            '@keyframes', 'transform-origin', 'perspective', '@supports',
            'text-shadow', 'box-shadow' if 'inset' in line or 'drop-shadow' in line else None
        ]):
            if 'clip-path' in line or 'filter' in line or 'backdrop-filter' in line or \
               'content:' in line or 'animation:' in line or 'transform-origin' in line or \
               'perspective' in line or 'text-shadow' in line or '@supports' in line or \
               ('box-shadow' in line and ('inset' in line or 'drop-shadow' in line)):
                current_rule.append(line)
        # Track rule start/end for multi-line properties
        elif '{' in line:
            in_rule = True
            current_rule = [line]
        elif '}' in line:
            if in_rule:
                current_rule.append(line)
                essential_css.append('\n'.join(current_rule))
            in_rule = False
            current_rule = []
        elif in_rule:
            current_rule.append(line)

# Write the result
with open('essential_css.txt', 'w') as f:
    f.write('\n'.join(essential_css))

print("Extracted essential CSS")
print(f"Original CSS lines: {len(lines)}")
print(f"Essential CSS lines: {len(essential_css)}")
