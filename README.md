# VueSetter

[![npm](https://img.shields.io/npm/v/vue-setter.svg)](https://www.npmjs.com/package/vue-setter) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Plugin for data binding via getter and setter

## Installation

```bash
npm install --save vue-setter
```

## Usage

### Bind on input

```
<input type="text" v-setter.name="user" :value="user.getName()">
```

Will automatically invote `user.setName` on input.

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueSetter from 'vue-setter'

Vue.use(VueSetter)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-setter/dist/vue-setter.js"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Build

Bundle the js of the `dist` folder:

```bash
npm run build
```


## License

[MIT](http://opensource.org/licenses/MIT)
