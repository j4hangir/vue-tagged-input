// vue-tagged-input.d.ts

declare module '@j4hangir/vue-tagged-input' {
    import {DefineComponent, PropType} from 'vue';

    export interface Tag {
        text: string
        style?: string
        classes?: string
    }

    export const VueTaggedInput: DefineComponent<{
        modelValue: {
            type: PropType<Tag[] | string[] | string>;
            default: undefined;
        };
        addOnKey: {
            type: PropType<string[]>;
            default: undefined;
        };
        addOnBlur: {
            type: BooleanConstructor;
            default: undefined;
        };
        placeholder: {
            type: StringConstructor;
            default: undefined;
        };
        maxTags: {
            type: NumberConstructor;
            default: undefined;
        };
        validate: {
            type: PropType<RegExp | ((tag: string) => boolean)>;
            default: undefined;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        readonly: {
            type: BooleanConstructor;
            default: undefined;
        };
        removeOnDelete: {
            type: BooleanConstructor;
            default: undefined;
        };
        beforeAdding: {
            type: PropType<(tag: string) => boolean>;
            default: undefined;
        };
    }>

}
