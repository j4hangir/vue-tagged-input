# vue-tagged-input

A tags input component for Vue 3 with autocompletion, custom validation, templating and much more

Forked from [@sipec/vue3-tags-input](https://www.npmjs.com/package/@sipec/vue3-tags-input)

[Demo & Docs](http://www.vue-tags-input.com) (for the original version)

## Features

* No dependencies
* Custom validation rules
* Hooks: Before adding, Before deleting ...
* Edit tags after creation
* Fast setup
* Works with Vuex
* Small size: 34kb minified (css included) | gzipped 9kb
* Autocompletion
* Many customization options
* Own templates
* Delete tags on backspace
* Add tags on paste
* Examples & Docs

## Install

NPM
```
npm install @j4hangir/vue-tagged-input
```

CDN
```
<script src="https://unpkg.com/@j4hangir/vue-tagged-input/dist/vue-tagged-input.js"></script>
```

## Usage

```html
<template>
  <div>
    <vue-tags-input
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => tags = newTags"
    />
  </div>
</template>
```

```javascript
<script>
    import VueTaggedInput from "@j4hangir/vue-tagged-input";

export default {
  components: {
    VueTaggedInput,
  },
  data() {
    return {
      tag: '',
      tags: [],
    };
  },
};
</script>
```

Import the css

```html

<style>
    @import "@j4hangir/vue-tagged-input/dist/assets/vue-tagged-input.css";
</style>
```

## Migration From Vue 2

This version is faithful to the original spec. The only thing you'll have to change is replacing any usages of `tags.sync` with `vmodel:tags` in the props

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 Johannes Munari
