import { Component, TemplateResult } from '@slickstream/c4/lib/core/component.js';
import { PropertyValues } from 'lit';
import './icons';
import './fab';
import '@slickstream/c4/lib/button';
import '@slickstream/c4/lib/icon-button';
declare global {
    interface HTMLElementTagNameMap {
        'navu-guide': NavuGuide;
    }
}
export declare class NavuGuide extends Component {
    recommending: boolean;
    private _hovering;
    private _searchMode;
    private _searchTextbox;
    private _mouseOver;
    private _hoverOutTimer;
    private _recommendedOnce;
    static styles: import("lit").CSSResultGroup[];
    render(): TemplateResult;
    updated(changes: PropertyValues<NavuGuide>): void;
    private _onFabClick;
    private _closeSearch;
    private _cancelHoverOutTimer;
    private _onFabMouseEnter;
    private _onMouseOver;
    private _onMouseOut;
}
