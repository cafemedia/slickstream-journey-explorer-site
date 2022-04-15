import { Component, ce, html, TemplateResult, css, property, state, query } from '@slickstream/c4/lib/core/component.js';
import { FONT_STYLE } from '@slickstream/c4/lib/core/styles';
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

const suggestions = [
  { label: 'Review our pricing' },
  { caption: 'Also see', label: 'How WAN Optimization really works' },
  { caption: 'Recommended', label: 'Sign up for our webinar on WAN Optimization' },
  { label: 'More...', icon: 'search' }
];

@ce('navu-guide')
export class NavuGuide extends Component {
  @property({ type: Boolean }) recommending = false;
  @state() private _hovering = false;
  @state() private _searchMode = false;
  @query('#txtSearch') private _searchTextbox !: HTMLInputElement;

  private _mouseOver = false;
  private _hoverOutTimer = 0;
  private _recommendedOnce = false;

  static styles = [
    Component.styles,
    FONT_STYLE,
    css`
    :host {
      display: block;
      position: fixed;
      bottom: 4px;
      left: 4px;
    }

    #fabPanel {
      padding: 12px;
      border-radius: 50%;
    }
    navu-fab {
      --c4-padding: 10px;
      --c4-shadow: none;
      --c4-theme-on-secondary: #0277BD;
      --c4-theme-secondary: rgba(255,255,255,0.7);
      transform: scale(0.7);
      transition: transform 0.18s ease;
    }
    .recommending navu-fab,
    #fabPanel:hover navu-fab {
      transform: scale(1);
      --c4-theme-secondary: #0277BD;
      --c4-theme-on-secondary: #fff;
      --c4-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    }

    #cardPanel {
      position: absolute;
      left: 100%;
      left: calc(100% + 8px);
      bottom: 16px;
      width: 280px;
      pointer-events: none;
      opacity: 0;
      align-items: start;
      gap: 10px;
      display: flex;
      flex-direction: column-reverse
    }
    .recommending #cardPanel {
      pointer-events: auto;
      opacity: 1;
    }
    .card {
      background: white;
      cursor: pointer;
      border-radius: 4px;
      user-select: none;
      text-align: left;
      letter-spacing: 0.5px;
      white-space: nowrap;
      pointer-events: none;
      transform: translateY(100%);
      opacity: 0;
      position: relative;
      --c4-theme-primary: #0277BD;
      --c4-padding: 12px 16px;
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
    }
    #card0::before {
      content: "";
      position: absolute;
      top: -7px;
      left: 6px;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: #a2c7e0;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
      transition: opacity 0.2s ease;
      opacity: 1;
    }
    #card0.card {
      transform-origin: left center;
      z-index: 1;
      transform: translateX(-32px) scale(0);
    }
    .recommending.hovering #card0.card,
    .recommending #card0.card {
      transform: translateX(0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }
    .recommending.hovering #card0::before {
      opacity: 0;
    }
    .recommending.hovering .card {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
      transition-delay: var(--navu-guide-cell-transition-delay, 0);
    }

    .button-innner {
      text-align: left;
      text-transform: initial;
      letter-spacing: 0.5px;
      white-space: initial;
    }
    .cardCaption {
      text-transform: uppercase;
      font-size: 12px;
      opacity: 0.7;
      padding-bottom: 8px;
      letter-spacing: 1px;
      font-weight: 300;
    }
    .cardLabel {
      line-height: 1.5;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 1000;
      padding: 0 16px;
      background-color: #0277BD;
      color: white;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
      pointer-events: none;
      opacity: 0;
      transform: translateY(-120%);
    }
    main {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      bottom: 0;
      z-index: 1000;
      padding: 0 16px;
      background-color: #ffffff;
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
      pointer-events: none;
      opacity: 0;
      transform: translateY(110%);
    }
    #txtSearch {
      display: block;
      width: 100%;
      outline: none;
      border: none;
      background: rgba(255,255,255,0.95);
      font-size: 14px;
      font-family: inherit;
      height: 40px;
      border-radius: 20px;
      padding: 0 20px;
    }
    .search-mode header {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
    .search-mode main {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }


    `
  ];

  render(): TemplateResult {
    return html`
    <div id="floatingSection" 
      ?hidden="${this._searchMode}" 
      class="${this.recommending ? 'recommending' : ''} ${this._hovering ? 'hovering' : ''}">
      <div id="fabPanel" @mouseenter="${this._onFabMouseEnter}">
        <navu-fab .on="${this.recommending}" off-icon="shortcut" on-icon="shortcut" @click="${this._onFabClick}"></navu-fab>
      </div>
      <div id="cardPanel" @mouseenter="${this._onMouseOver}" @mouseleave="${this._onMouseOut}">
        ${suggestions.map((d, i) => html`
          <div id="card${i}" class="card" style="--navu-guide-cell-transition-delay: ${i * 0.15}s">
            <cf-button type="raised" .icon="${d.icon}">
              <div class="vert button-innner">
                ${d.caption ? html`<div class="cardCaption">${d.caption}</div>` : null}
                <div class="cardLabel">${d.label}</div>
              </div>
            </cf-button>
          </div>
        `)}
      </div>
    </div>
    
    <div id="searchSection" class="${this._searchMode ? 'search-mode' : ''}">
      <main>
        <p>search content goes here</p>
      </main>
      <header class="horiz center">
        <div class="flex" style="position: relative;">
          <input id="txtSearch" placeholder="What are you looking for?">
        </div>
        <cf-icon-button icon="close" style="margin-left: 8px;" @click="${this._closeSearch}"></cf-icon-button>
      </header>
    </div>
    `;
  }

  updated(changes: PropertyValues<NavuGuide>) {
    if (changes.has('recommending') && this.recommending) {
      this._recommendedOnce = true;
    }
  }

  private _onFabClick() {
    // TODO: open full search
    this._searchMode = true;
    this.recommending = false;
    this._searchTextbox.focus();
  }

  private _closeSearch() {
    this._searchMode = false;
  }

  private _cancelHoverOutTimer() {
    if (this._hoverOutTimer) {
      window.clearTimeout(this._hoverOutTimer);
      this._hoverOutTimer = 0;
    }
  }

  private _onFabMouseEnter() {
    if (this._recommendedOnce && (!this.recommending)) {
      this.recommending = true;
      setTimeout(() => {
        if (this.recommending && (!this._hovering)) {
          this.recommending = false;
        }
      }, 2000);
    }
  }

  private _onMouseOver() {
    this._cancelHoverOutTimer();
    this._hovering = true;
    this._mouseOver = true;
  }

  private _onMouseOut() {
    this._cancelHoverOutTimer();
    this._mouseOver = false;
    if (this._hovering) {
      this._hoverOutTimer = window.setTimeout(() => {
        if (!this._mouseOver) {
          this._hovering = false;
        }
        this._hoverOutTimer = 0;
      }, 2000);
    }
  }
}