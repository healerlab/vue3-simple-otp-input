import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    length: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    mainColor: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    fontColor: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    allowPaste: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    onlyNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    isRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"password" | "text">;
        default: string;
        validator: (value: string) => boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClassName: {
        type: StringConstructor;
        default: string;
    };
    inputClassName: {
        type: StringConstructor;
        default: string;
    };
}, {
    clear: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onFinish" | "onChange")[], "onFinish" | "onChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    length: {
        type: NumberConstructor;
        required: true;
        default: number;
    };
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    mainColor: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    fontColor: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    allowPaste: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    onlyNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    isRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"password" | "text">;
        default: string;
        validator: (value: string) => boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClassName: {
        type: StringConstructor;
        default: string;
    };
    inputClassName: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onOnFinish?: ((...args: any[]) => any) | undefined;
    onOnChange?: ((...args: any[]) => any) | undefined;
}, {
    length: number;
    type: "password" | "text";
    defaultColor: string;
    mainColor: string;
    fontColor: string;
    allowPaste: boolean;
    onlyNumber: boolean;
    isRefresh: boolean;
    autoFocus: boolean;
    disabled: boolean;
    outlined: boolean;
    readonly: boolean;
    wrapperClassName: string;
    inputClassName: string;
}, {}>;
export default _default;
