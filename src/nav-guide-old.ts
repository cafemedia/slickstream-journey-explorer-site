import { Component, ce, html, TemplateResult, css, property, state } from '@slickstream/c4/lib/core/component.js';
import { FONT_STYLE } from '@slickstream/c4/lib/core/styles';

import './icons';
import './fab';

declare global {
  interface HTMLElementTagNameMap {
    'navu-guide-old': NavuGuide;
  }
}

@ce('navu-guide-old')
export class NavuGuide extends Component {
  @property({ type: Boolean }) engaged = false;
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
    
    #fabPanel:hover navu-fab {
      transform: scale(1);
      --c4-theme-secondary: #0277BD;
      --c4-theme-on-secondary: #fff;
      --c4-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    }

    .card {
      position: absolute;
      left: calc(100% + 16px);
      bottom: 0;
      background: white;
      padding: 12px 16px;
      cursor: pointer;
      border-radius: 4px;
      min-width: 120px;
      user-select: none;
      text-align: center;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateY(100%);
      transition: opacity 0.2s ease-out, transform 0.28s ease-out;
    }
    .mainCard {
      transform-origin: left center;
      transform: translateX(-32px) scale(0);
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    }
    #mainCard {
      z-index: 1;
    }
    .recommending .mainCard {
      opacity: 1;
      transform: translateX(0) scale(1);
      pointer-events: auto;
    }
    .recommending #mainCardShadow.mainCard {
      transform: translate3d(5px, -5px, 0) scale(1);
      pointer-events: none;
    }
    .recommending.hovering #mainCardShadow {
      opacity: 0;
    }
    .recommending.hovering .secondary-card {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    #card2.card {
      bottom: 60px;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    }
    #card3.card {
      bottom: 120px;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    }
    #card4.card {
      bottom: 180px;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    }
    `
  ];

  render(): TemplateResult {
    return html`
    <div id="container" class="${this.engaged ? 'engaged' : ''} ${this.recommending ? 'recommending' : ''} ${this._hovering ? 'hovering' : ''}">
      <div id="fabPanel">
        <navu-fab .on="${this.engaged}" off-icon="shortcut" on-icon="shortcut" @click="${this._onFabClick}"></navu-fab>
      </div>
      <div id="cardPanel" @mouseenter="${this._mouseOver}" @mouseleave="${this._mouseOut}">
        <div id="mainCard" class="card mainCard">Pricing</div>
        <div id="mainCardShadow" class="card mainCard">Pricing</div>
        <div id="card2" class="card secondary-card"><span>How it works</span></div>
        <div id="card3" class="card secondary-card"><span>FAQ</span></div>
        <div id="card4" class="card secondary-card"><span>More</span></div>
      </div>
    </div>
    `;
  }

  private _onFabClick() {
    this.engaged = true;
  }

  private _mouseOver() {
    this._hovering = true;
  }

  private _mouseOut() {
    this._hovering = false;
  }
}