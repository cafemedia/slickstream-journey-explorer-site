import { Component, TemplateResult } from '@slickstream/c4/lib/core/component.js';
import './navu-dot';
import './icons';
import '@slickstream/c4/lib/icon';
declare global {
    interface HTMLElementTagNameMap {
        'navu-bar': NavuBar;
    }
}
export declare class NavuBar extends Component {
    recommendation: boolean;
    engaged: boolean;
    static styles: import("lit").CSSResultGroup[];
    render(): TemplateResult;
    firstUpdated(): void;
    private _mouseOver;
    private _mouseOut;
}
