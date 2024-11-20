AUTHOR = 'Nerfcademia'
SITENAME = 'Nerfcademia'
SITEURL = ""

TIMEZONE = 'Europe/Rome'
DEFAULT_LANG = 'en'

# for local development
SITEURL = ''
RELATIVE_URLS = True

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

PATH = "content"
PAGE_PATHS = ['pages'] 
ARTICLE_PATHS = ['articles']
IGNORE_FILES = ['.ipynb_checkpoints']

# URL structure for pages
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}.html'

# article URL structure
#ARTICLE_URL = 'blog/{slug}/'
#ARTICLE_SAVE_AS = 'blog/{slug}.html'

#HOME_PAGES = ['home.html']
#HOME_TEMPLATE = "home.html"

OUTPUT_PATH = 'output'

#THEME = 'notmyidea'
THEME = 'theme'
THEME_TEMPLATES_OVERRIDES = ['theme/templates']
THEME_STATIC_PATHS = ['static']
STATIC_PATHS = ['images']

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = 15

# ../venv/bin/pelican content -l -r -s pelicanconf.py