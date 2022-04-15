import { Component, ce, html, TemplateResult, css, property, state } from '@slickstream/c4/lib/core/component.js';
import { FONT_STYLE } from '@slickstream/c4/lib/core/styles';

import './icons';
import './fab';
import '@slickstream/c4/lib/button';

declare global {
  interface HTMLElementTagNameMap {
    'navu-guide': NavuGuide;
  }
}

const suggestions = [
  { caption: '', label: 'Pricing' },
  { caption: '', label: 'How it really works' },
  { caption: '', label: 'FAQ' },
  { caption: '', label: 'More...' }
];

@ce('navu-guide')
export class NavuGuide extends Component {
  @property({ type: Boolean }) recommending = false;

  @state() private _hovering = false;

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
      min-width: 120px;
      min-height: 120px;
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
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
    }
    #card0::before {
      content: "";
      position: absolute;
      top: -8px;
      left: 8px;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: pink;
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


    `
  ];

  render(): TemplateResult {
    return html`
    <div id="container" class="${this.recommending ? 'recommending' : ''} ${this._hovering ? 'hovering' : ''}">
      <div id="fabPanel">
        <navu-fab .on="${this.recommending}" off-icon="shortcut" on-icon="shortcut" @click="${this._onFabClick}"></navu-fab>
      </div>
      <div id="cardPanel" @mouseenter="${this._mouseOver}" @mouseleave="${this._mouseOut}">
        ${suggestions.map((d, i) => html`
          <div id="card${i}" class="card" style="--navu-guide-cell-transition-delay: ${i * 0.15}s">
            <cf-button type="raised">${d.label}</cf-button>
          </div>
        `)}
        <!-- <div id="mainCard" class="card mainCard">Pricing</div>
        <div id="mainCardShadow" class="card mainCard">Pricing</div>
        <div id="card2" class="card secondary-card"><span>How it works</span></div>
        <div id="card3" class="card secondary-card"><span>FAQ</span></div>
        <div id="card4" class="card secondary-card"><span>More</span></div> -->
      </div>
    </div>
    `;
  }

  private _onFabClick() {
    // TODO: open full search
  }

  private _mouseOver() {
    this._hovering = true;
  }

  private _mouseOut() {
    this._hovering = false;
  }
}