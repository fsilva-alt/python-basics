# Python Basics

An example course for complete beginners: install Python, learn variables, decisions, loops
and functions, and build a number-guessing game. 8 chapters in 3 parts, about 1 h 30 min.

Written in Markdown and rendered with **coursekit** into a single, self-contained
`dist/index.html`.

## Build

Needs the coursekit repository next to this one (`../coursekit`) and Python 3.9+.

```bash
./build.sh            # build dist/index.html: open it in a browser or publish it anywhere
./build.sh dev        # preview at http://127.0.0.1:8000, rebuilt and reloaded as you save
./build.sh --strict   # fail on warnings (missing images, broken links …)
```

## Layout

```
course.yml                                 settings (title, colours, numbering …)
chapters/01-getting-started/ …             parts (folders, title in _part.yml) and chapters (.md)
assets/                                    logo and diagrams (embedded at build time)
styles/custom.css, scripts/custom.js       course-specific style and behaviour
```
