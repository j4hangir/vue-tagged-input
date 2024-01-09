import VueTaggedInputComponent from '../src/vue-tagged-input.vue';
import {createClasses, createTag, createTags} from '../src/create-tags';
import TagInputComponent from '../src/tag-input.vue';


// Add autoinstall support if the component is attached to the window object e.g. if added by CDN
const VueTaggedInput = {
    ...VueTaggedInputComponent, install(Vue) {
        Vue.component(VueTaggedInputComponent.name, VueTaggedInputComponent);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTaggedInput);
}

export {VueTaggedInput, createClasses, createTag, createTags, TagInputComponent as TagInput};
