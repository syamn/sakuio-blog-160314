# sakuio-blog-160314

先に node と npm をインストールしておく。


# How to build
## Clone to your computer
```
git clone git@github.com:syamn/sakuio-blog-160314.git
cd ./sakuio-blog-160314
```

## Install global packages
```
npm install -g typescript@next
npm install -g typings
npm install -g webpack
npm install -g webpack-dev-server
```

## Linking
```
npm link typescript
npm link webpack
```

## Install local packages
```
npm install
```

## Install TypeScript definitions
```
typings install
```

## Run the server
```
npm run server
```

then open `http://localhost:8080` in your browser
