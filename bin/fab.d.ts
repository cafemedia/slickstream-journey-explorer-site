import { Component, TemplateResult } from '@slickstream/c4/lib/core/component.js';
import '@slickstream/c4/lib/icon';
declare global {
    interface HTMLElementTagNameMap {
        'navu-fab': NavuFab;
    }
}
export declare class NavuFab extends Component {
    disabled: boolean;
    mini: boolean;
    trailingIcon: boolean;
    on: boolean;
    onIcon?: string;
    offIcon?: string;
    noAimation: boolean;
    label?: string;
    static styles: import("lit").CSSResultGroup[];
    render(): TemplateResult;
}
