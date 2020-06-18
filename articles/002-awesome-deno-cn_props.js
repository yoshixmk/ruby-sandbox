import Ga from '/profile/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/profile/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "yoshixmk Profile",
        "sidebar": [
            "README.md",
            {
                "link": "articles/README.md",
                "children": [
                    "articles/001-install-and-hello-world.md",
                    "articles/002-awesome-deno-cn.md"
                ]
            },
            {
                "link": "translations/README.md",
                "children": [
                    "translations/001-the-deno-handbook.md",
                    "translations/002-deno-chat-app.md",
                    "translations/003-from-node-to-deno.md"
                ]
            }
        ],
        "nav": [
            {
                "text": "Tegebu",
                "link": "https://www.tegebu.com/"
            },
            {
                "text": "Deno Third Party Modules Ranking",
                "link": "https://deno.land/x/ranking"
            },
            {
                "text": "Github",
                "link": "https://github.com/yoshixmk"
            },
            {
                "text": "Twitter",
                "link": "https://twitter.com/yoshixmk"
            },
            {
                "text": "Qiita",
                "link": "https://qiita.com/yoshixmk"
            }
        ],
        "ga": {
            "id": "UA-149348992-2"
        }
    },
    'pagePath': "articles/002-awesome-deno-cn.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/002-awesome-deno-cn.html",
    'title': "Denoのサードパーティモジュールを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Denoのサードパーティモジュールを公開しました</h1>\n<h2 id="tbd">TBD<a class="anchor" href="#tbd">§</a></h2>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#tbd">TBD</a></li></ol></nav>'
        } }),
    'sidebar': [
        {
            "text": "@yoshixmk / Yoshihiro Ueki",
            "link": "index.html"
        },
        {
            "link": "articles/index.html",
            "children": [
                {
                    "text": "社内勉強会でDenoを発表しました",
                    "link": "articles/001-install-and-hello-world.html"
                },
                {
                    "text": "Denoのサードパーティモジュールを公開しました",
                    "link": "articles/002-awesome-deno-cn.html"
                }
            ],
            "text": "ブログ"
        },
        {
            "link": "translations/index.html",
            "children": [
                {
                    "text": "TBD",
                    "link": "translations/001-the-deno-handbook.html"
                },
                {
                    "text": "TBD",
                    "link": "translations/002-deno-chat-app.html"
                },
                {
                    "text": "TBD",
                    "link": "translations/003-from-node-to-deno.html"
                }
            ],
            "text": "翻訳"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-149348992-2" })
};