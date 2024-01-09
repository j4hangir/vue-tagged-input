# vue-tagged-input

A tags input component for Vue 3 with autocompletion, custom validation, templating and much more

Forked from [@sipec/vue3-tags-input](https://www.npmjs.com/package/@sipec/vue3-tags-input)

[//]: # ([Demo & Docs]&#40;http://www.vue-tags-input.com&#41; &#40;for the original version&#41;)

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
      <vue-tagged-input
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => tags = newTags"
    />
  </div>
</template>
```

```html

<script lang="ts">
    import {VueTaggedInput} from "@j4hangir/vue-tagged-input";

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

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023 j4hangir
