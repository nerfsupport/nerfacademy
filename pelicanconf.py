AUTHOR = 'Nerfcademia'
SITENAME = 'Nerfcademia'
SITEURL = ""
SITE_DESCRIPTION = "Your go-to site for NERF blaster reviews, tips to dominate your next game!"

TIMEZONE = 'Europe/Rome'
DEFAULT_LANG = 'en'

# for local development
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

THEME = 'theme'
THEME_TEMPLATES_OVERRIDES = ['theme/templates']
THEME_STATIC_PATHS = ['static']
STATIC_PATHS = ['images']


DEFAULT_PAGINATION = 15

PLUGINS = ['pelican.plugins.sitemap']
SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.5,
        'pages': 0.7,
        'indexes': 0.6,
    },
    'changefreqs': {
        'articles': 'monthly',
        'pages': 'weekly',
        'indexes': 'daily',
    }
}

GOOGLE_ANALYTICS = 'G-ERGYCTRCMC'

# ../venv/bin/pelican content -l -r -s pelicanconf.py