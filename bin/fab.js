var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ce, html, css, property } from '@slickstream/c4/lib/core/component.js';
import { FLEX_STYLE, FONT_STYLE } from '@slickstream/c4/lib/core/styles.js';
import { classMap } from 'lit/directives/class-map.js';
import '@slickstream/c4/lib/icon';
let NavuFab = class NavuFab extends Component {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.mini = false;
        this.trailingIcon = false;
        this.on = false;
        this.noAimation = false;
    }
    render() {
        const cc = {
            hasicon: !!this.offIcon,
            haslabel: !!this.label,
            trailingicon: !!(this.offIcon && this.trailingIcon)
        };
        return html `
    <button 
      aria-label="${this.label || (this.on ? this.onIcon : this.offIcon) || ''}" 
      aria-pressed="${this.on}"
      ?disabled="${this.disabled}" 
      class="horiz center2 ${classMap(cc)}">
      <div id="iconPanel" class="${this.noAimation ? 'noanimation' : ''}">
        <cf-icon id="officon" .icon="${this.offIcon}"></cf-icon>
        <cf-icon id="onicon" .icon="${this.onIcon}"></cf-icon>
      </div>
      <span>${this.label}</span>
    </button>
    `;
    }
};
NavuFab.styles = [
    Component.styles,
    FLEX_STYLE,
    FONT_STYLE,
    css `
      :host {
        display: inline-block;
        vertical-align: top;
        text-transform: uppercase;
        font-size: 14px;
        color: var(--c4-theme-secondary, var(--c4-theme-primary, #6200ee));
      }
      button {
        cursor: pointer;
        outline: none;
        border-radius: 28px;
        overflow: hidden;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
        letter-spacing: 1.25px;
        line-height: 1;
        padding: var(--c4-padding, 16px);
        text-transform: inherit;
        width: 100%;
        background: currentColor;
        border: none;
        color: inherit;
        box-shadow: var(--c4-shadow, 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%));
        transition: box-shadow 0.28s ease;
      }
      button > * {
        color: var(--c4-theme-on-secondary, var(--c4-theme-on-primary, white));
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--c4-theme-on-secondary, var(--c4-theme-on-primary, white));
        opacity: 0;
        pointer-events: none;
      }
      button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--c4-theme-on-secondary, var(--c4-theme-on-primary, white));
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:focus::before {
        opacity: 0.1;
      }
      button:active::after {
        opacity: 0.2;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #iconPanel {
        position: relative;
        width: var(--c4-icon-size, 24px);
        height: var(--c4-icon-size, 24px);
        display: none;
      }
      cf-icon {
        width: var(--c4-icon-size, 24px);
        height: var(--c4-icon-size, 24px);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        pointer-events: none;
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #iconPanel.noanimation cf-icon {
        transition: initial;
      }
      #onicon {
        opacity: 0;
        transform: rotateZ(-180deg);
      }
      button span {
        display: none;
      }

      button.hasicon #iconPanel {
        display: block;
      }
      button.haslabel {
        padding: var(--c4-padding, 0 20px);
        height: 48px;
      }
      button.haslabel span {
        display: block;
      }
      button.haslabel::after {
        border-radius: 28px;
      }

      :host([mini]) button.hasicon.haslabel,
      button.hasicon.haslabel {
        padding-inline-start: 12px;
      }
      button.hasicon.haslabel #iconPanel {
        margin-inline-end: 12px;
      }
      
      :host([mini]) button.hasicon.haslabel.trailingicon,
      button.hasicon.haslabel.trailingicon {
        padding-inline-start: 20px;
        padding-inline-end: 12px;
      }
      button.hasicon.haslabel.trailingicon #iconPanel {
        margin-inline-end: 0;
        margin-inline-start: 12px;
      }
      button.horiz.trailingicon {
        flex-direction: row-reverse;
      }

      :host([mini]) button {
        padding: var(--c4-padding, 8px);
      }
      :host([mini]) button.haslabel {
        padding: var(--c4-padding, 0 16px);
        height: 40px;
      }

      :host([disabled]) button {
        background-color: var(--c4-disabled-color, rgba(0, 0, 0, 0.12));
        cursor: initial;
        pointer-events: none;
        box-shadow: none;
      }
      :host([disabled]) button > * {
        color: var(--c4-disabled-text-color, rgba(0, 0, 0, 0.38));
      }

      :host([on]) #officon {
        opacity: 0;
        transform: rotateZ(180deg);
      }
      :host([on]) #onicon {
        opacity: 1;
        transform: rotateZ(0deg);
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
        button:focus:hover::before {
          opacity: 0.1;
        }
      }
    `,
];
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], NavuFab.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], NavuFab.prototype, "mini", void 0);
__decorate([
    property({ type: Boolean, attribute: 'trailing-icon' }),
    __metadata("design:type", Object)
], NavuFab.prototype, "trailingIcon", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], NavuFab.prototype, "on", void 0);
__decorate([
    property({ type: String, attribute: 'on-icon' }),
    __metadata("design:type", String)
], NavuFab.prototype, "onIcon", void 0);
__decorate([
    property({ type: String, attribute: 'off-icon' }),
    __metadata("design:type", String)
], NavuFab.prototype, "offIcon", void 0);
__decorate([
    property({ type: Boolean, attribute: 'no-animation' }),
    __metadata("design:type", Object)
], NavuFab.prototype, "noAimation", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], NavuFab.prototype, "label", void 0);
NavuFab = __decorate([
    ce('navu-fab')
], NavuFab);
export { NavuFab };
