// vue-tagged-input.d.ts

declare module '@j4hangir/vue-tagged-input' {
    import {DefineComponent} from 'vue';

    export interface Tag {
        text: string;
        style?: string
        classes?: string
    }

    export interface Vue3TagsInputProps {
        modelValue?: Tag[] | string[] | string;
        addOnKey?: string[];
        addOnBlur?: boolean;
        placeholder?: string;
        maxTags?: number;
        validate?: RegExp | ((tag: string) => boolean);
        disabled?: boolean;
        readonly?: boolean;
        removeOnDelete?: boolean;
        beforeAdding?: (tag: string) => boolean;
    }

    const VueTagsInput: DefineComponent<Vue3TagsInputProps>;

    export default VueTagsInput;
}
