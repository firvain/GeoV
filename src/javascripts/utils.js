/* eslint-disable */
const utils = {
  hasClass: function hasClass(el, className) {
    if (el.classList) {
      el.classList.contains(className);
    } else {
      new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  },
  removeClass: function removeClass (el, className) {
    if (el.classList) {
      el.classList.remove(className);
    }
    else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },
  addClass: function removeClass (el, className) {
    if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;
  }
};
export default utils;
