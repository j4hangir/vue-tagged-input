import VueTagsInputComponent from './vue-tags-input.vue';
import {createClasses, createTag, createTags} from './create-tags';
import TagInputComponent from './tag-input.vue';


// Add autoinstall support if the component is attached to the window object e.g. if added by CDN
const VueTagsInput = {
    ...VueTagsInputComponent, install(Vue) {
        Vue.component(VueTagsInputComponent.name, VueTagsInputComponent);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTagsInput);
}

export {VueTagsInput, createClasses, createTag, createTags, TagInputComponent as TagInput};
