import { Component, ce, html, TemplateResult, css, property } from '@slickstream/c4/lib/core/component.js';

declare global {
  interface HTMLElementTagNameMap {
    'navu-dot': NavuDot;
  }
}

@ce('navu-dot')
export class NavuDot extends Component {
  @property() label?: string;

  static styles = [
    Component.styles,
    css`
      :host {
        display: inline-block;
        vertical-align: top;
        position: relative;
        z-index: 1;
      }
      button {
        background: none;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 50%;
        overflow: hidden;
        padding: var(--navu-dot-padding, 8px);
        color: inherit;
        user-select: none;
        position: relative;
        display: block;
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
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
        background: currentcolor;
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:active::after {
        opacity: 0.2;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      #dot {
        width: var(--navu-dot-size, 16px);
        height: var(--navu-dot-size, 16px);
        border-radius: 50%;
        border: 1px solid var(--navu-dot-border-color, #000);
        background:var(--navu-dot-default-bg, #fff);
        box-shadow: var(--navu-dot-box-shadow, rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px);
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.1;
        }
      }
    `,
  ];

  render(): TemplateResult {
    return html`
    <button aria-label="${this.label || ''}">
      <div id="dot"></div>
    </button>
    `;
  }
}