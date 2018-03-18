import { EventedMixin } from '../lib/mixins';
import { CustomElement } from '../lib';

export default class Application extends CustomElement {
  get _name() {
    return `${this._prefix}app`;
  }

  applyStyle() {
    this._style.display = 'block';
    this._style.width = '100px';
    this._style.height = '100px';
    this._style.backgroundColor = 'red';
  }

  render() {
    this.renderElement('div');
    this.renderElement('div');
  }
}

Application.register();
