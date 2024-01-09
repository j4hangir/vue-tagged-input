import VueTagsInput from './/vue-tags-input.vue';
import {createClasses, createTag, createTags} from './/create-tags';
import TagInput from './/tag-input.vue';

// add autoinstall support if the component is attached to the windows object e.g. if added by CDN
VueTagsInput.install = Vue => Vue.component(VueTagsInput.name, VueTagsInput);
if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueTagsInput);


export {
    VueTagsInput,
    createClasses,
    createTag,
    createTags,
    TagInput,
};

export default VueTagsInput;
