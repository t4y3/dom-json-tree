import { h, patch } from "superfine"
import styles from './style.css';

/**
 * [DomJsonTree description]
 */
export default class DomJsonTree {
  constructor(json, container) {
    this.json = json;
    this.container = container;
    this.node;
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    this._update();
  }

  /**
   * [_update description]
   * @return {[type]} [description]
   */
  _update() {
    this.node = patch(this.node, this._view(), this.container);
  };

  /**
   * [_view description]
   * @return {[type]} [description]
   */
  _view() {
    let template = [];
    Object.keys(this.json).forEach((key) => {
      template.push(this._getObjectTemplate(key, this.json[key]));
    });

    return h("div", { class: 'djt-Content', style: styles['Content'] }, template);
  }

  /**
   * [_getKeyTemplate description]
   * @param  {[type]} k [description]
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  _getKeyTemplate(k, v) {
    if (this._isPrimitiveType(v)) {
      let type = typeof v;
      let v2 = (type == 'string') ? `"${ v }"` : v.toString();

      return h(
        "div",
        { class: 'djt-Property', style: styles['Property'] },
        [
          h("span", { class: 'djt-Property_Key', style: styles['Property_Key'] }, k),
          h("span", { class: 'djt-Property_Colon', style: styles['Property_Colon'] }, ': '),
          h("span", { class: 'djt-Property_Type', style: styles[`Property_Type-${ type }`] }, v2),
        ]
      );
    } else {
      // TODO: 畳んだ状態でも見えるように
      let type = (typeof v.length === 'number') ? `Array[${ v.length }]`: 'Object';
      return h(
        "div",
        {
          class: 'djt-Property',
          style: styles['Property'],
          'data-djt-toggle': 'open',
          onclick: (e) => {

            let target = e.target.classList.contains('djt-Property') ? e.target : e.target.parentNode;

            if (target.dataset.djtToggle == 'open') {
              target.dataset.djtToggle = 'close';
              target.nextElementSibling.style.display = 'none';
              target.parentNode.querySelector('.djt-Arrow').style.transform = 'none';
            } else {
              target.dataset.djtToggle = 'open';
              target.nextElementSibling.style.display = 'block';
              target.parentNode.querySelector('.djt-Arrow').style.transform = 'rotate(90deg)';
            }
          }
        },
        [
          h("span", { class: 'djt-Property_Key', style: styles['Property_Key'] }, k),
          h("span", { class: 'djt-Property_Colon', style: styles['Property_Colon'] }, ': '),
          h("span", { class: 'djt-Property_Type', style: styles['Property_Type'] }, type),
        ]
      );
    }
  };

  /**
   * [_getValueTemplate description]
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  _getValueTemplate(v) {
    let template = [];
    Object.keys(v).forEach((key) => {
      template.push(this._getObjectTemplate(key, v[key]));
    });

    return h("div", { class: 'djt-Value', style: styles['Value'] }, template);
  };

  /**
   * [_getObjectTemplate description]
   * @param  {[type]} k [description]
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  _getObjectTemplate(k, v) {
    let template = [];
    // オブジェクトか配列
    if (this._isPrimitiveType(v)) {
      template.push(this._getKeyTemplate(k, v));
    } else {
      template.push(h("span", { class: 'djt-Arrow', style: styles['Arrow'] }, ''));
      template.push(this._getKeyTemplate(k, v));
      template.push(this._getValueTemplate(v));
    }

    return h("div", { key: k, class: 'djt-object', style: styles['Object'] }, template);
  };

  /**
   * [_isPrimitiveType description]
   * @param  {[type]}  v [description]
   * @return {Boolean}   [description]
   */
  _isPrimitiveType(v) {
    if (v && typeof v === 'object') {
      return false;
    } else {
      return true;
    }
  }
}
