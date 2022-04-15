import { Component, TemplateResult } from '@slickstream/c4/lib/core/component.js';
declare global {
    interface HTMLElementTagNameMap {
        'navu-dot': NavuDot;
    }
}
export declare class NavuDot extends Component {
    label?: string;
    static styles: import("lit").CSSResultGroup[];
    render(): TemplateResult;
}
