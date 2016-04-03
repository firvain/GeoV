'use strict';

/**
 * check if element has class
 * @param {[string]} className
 * @param {[node]} element
 * returns {[bolean]}
 */
export function hasClass(className, element = document) {
  if (element.classList) {
    return element.classList.contains(className);
  }
  return new RegExp(`(^| )${className}( |$)`, 'gi').test(element.className);
}

/**
 * remove Class to element
 * @param {[string]} className
 * @param {[node]} element
 */
export function removeClass(className, element = document) {
  const el = element;
  if (element.classList) {
    element.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '); // eslint-disable-line
  }
}

/**
 * add Class to element
 * @param {[string]} className
 * @param {[node]} element
 */
export function addClass(className, element = document) {
  const el = element;
  if (element.classList) {
    element.classList.add(className);
  } else {
    el.className += ` ${className}`;
  }
}
/**
 * Get element by CSS selector
 * Alias for (element||document).querySelector
 *
 * @see document.querySelector
 * @see https://github.com/kentcdodds/es6-todomvc/blob/master/js/helpers.js
 * @see http://stackoverflow.com/questions/34157329/queryselector-and-queryselectorall-alias
 * @param selector
 * @param element
 * @returns {Element}
 */
export function qs(selector, element = document) {
  return element.querySelector(selector);
}

/**
 * Get elements by CSS selector
 * Alias for (element||document).querySelectorAll
 * The returned NodeList is not iterable, e.g. with foreach).
 * Use a for loop or the spread operator to iterate
 *
 * @example
 * for (let el of document.qsa('h1')) {
 *   console.log(el);
 * }
 *
 * // ... or use the spread operator:
 * [... document.qsa('h1')].forEach(function (el) {
 *   console.log(el);
 * });
 *
 * @see document.querySelectorAll
 * @see https://github.com/kentcdodds/es6-todomvc/blob/master/js/helpers.js
 * @see http://stackoverflow.com/questions/34157329/queryselector-and-queryselectorall-alias
 * @param selector
 * @param element
 * @returns {NodeList}
 */
export function qsa(selector, element = document) {
  return element.querySelectorAll(selector);
}

/**
 * Find the element's parent with the given tag name:
 * parent(qs('a'), 'div');
 *
 * @param element
 * @param tagName
 * @returns {null|Node}
 */
export function parent(element, tagName) {
  if (!element.parentNode || element.parentNode.tagName === undefined) {
    return null;
  }
  if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
    return element.parentNode;
  }
  return parent(element.parentNode, tagName);
}

/**
 * Remove child element(s)
 * element.innerHTNL = '' has a performance penality!
 * @see http://jsperf.com/empty-an-element/16
 * @see http://jsperf.com/force-reflow
 * @param element
 * @param forceReflow
 * @returns {*}
 */
export function removeChilds(element, forceReflow = true) {
  // See: http://jsperf.com/empty-an-element/16
  const el = element;
  while (el.lastChild) {
    el.removeChild(el.lastChild);
  }
  if (forceReflow) {
    // See: http://jsperf.com/force-reflow
    const d = el.style.display;

    el.style.display = 'none';
    el.style.display = d;
  }
  return el;
}

window.removeChilds = removeChilds;
window.addClass = addClass;
window.removeClass = removeClass;
window.hasClass = hasClass;
