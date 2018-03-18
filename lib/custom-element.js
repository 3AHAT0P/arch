import { EventedMixin } from './mixins';
import { UUID } from './utils';

export default class CustomElement extends EventedMixin(HTMLElement) {
  get _prefix() {
    return 'a-'
  }

  get _name() {
    return `${this._prefix}block`;
  }

  get _id() {
    if (this._cachedId == null)
      this._cachedId = `_${UUID()}`;
    return this._cachedId;
  }

  get _style() {
    if (this._cachedStyle == null) {
      this._styleSheet = document.styleSheets[0];
      this._styleIndex = this._styleSheet.cssRules.length;
      this._styleSheet.insertRule(`${this._name}#${this._id.replace(/\-/ig, '\\\-')} {}`, this._styleIndex);
      this._cachedStyle = this._styleSheet.cssRules[this._styleIndex].style;
    }
    return this._cachedStyle;
  }

  static register() {
    customElements.define(this.prototype._name, this);
  }

  constructor() {
    super();
    this.on('willMount', this.willMount);
    this.on('didMount', this.didMount);
    this.on('init', this.init);
    this.on('applyStyle', this.applyStyle);
    this.id = this._id;
    this.emit('init');
    this.emit('applyStyle');
  }

  willMount() {

  }

  didMount() {

  }

  applyStyle() {

  }

  init() {
    requestAnimationFrame(this.render.bind(this));
  }

  render() {

  }

  renderElement(tagName, ) {
    const element = document.createElement(tagName);
    if (element instanceof CustomElement)
      element.emit('willMount');
    this.append(element);
    if (element instanceof CustomElement)
      element.emit('didMount');
  }
}

CustomElement.register();
