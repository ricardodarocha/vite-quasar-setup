# vite-quasar-setup
Easy-peasy repository to clone and start programming with Vite + Vue + Quasar

# App

### Criação da aplicação com Vue + Quasar

Este setup pode ser baixado no repositorio https://github.com/ricardodarocha/vite-quasar-setup

Acessando a documentação Quasar, Vite Plugin

https://quasar.dev/start/vite-plugin

Vídeo para acompanhar

https://www.youtube.com/watch?v=UEYfPMoslts

```Shell
# npm 7+, extra double-dash is needed:
npm init vite@latest my-vue-app -- --template vue

> cd my-vue-app

$ npm install quasar @quasar/extras
$ npm install -D @quasar/vite-plugin sass@1.32.0
```

Salvar o seguinte código em Main.Js

```js
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {}, 
    lang: quasarLang,
    iconSet: quasarIconSet,
})

myApp.mount('#app')
```

Vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
})
```
quasar-variables.sass
```js
$primary   : #3374ee
$secondary : #26A69A
$accent    : #e85967

$dark      : #2c2c49

$positive  : #21c763
$negative  : #e90365
$info      : #8044ee
$warning   : #f7924f
```

```Shell
npm run dev 
```

### Outras informações 

Acesse a documentação de ícones https://fonts.google.com/icons?selected=Material+Icons
