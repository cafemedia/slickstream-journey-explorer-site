import { Component, TemplateResult } from '@slickstream/c4/lib/core/component.js';
import './icons';
import './fab';
declare global {
    interface HTMLElementTagNameMap {
        'navu-guide-old': NavuGuide;
    }
}
export declare class NavuGuide extends Component {
    engaged: boolean;
    recommending: boolean;
    private _hovering;
    static styles: import("lit").CSSResultGroup[];
    render(): TemplateResult;
    private _onFabClick;
    private _mouseOver;
    private _mouseOut;
}
