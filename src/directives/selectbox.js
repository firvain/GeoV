export default {
  twoWay: true,
  bind: function bind() {
    this.CssClasses_ = {
      LABEL: 'mdl-selectfield__label',
      SELECT: 'mdl-selectfield__select',
      IS_DIRTY: 'is-dirty',
      IS_FOCUSED: 'is-focused',
      IS_DISABLED: 'is-disabled',
      IS_INVALID: 'is-invalid',
      IS_UPGRADED: 'is-upgraded',
    };
    const label_ = this.el.querySelector('.' + this.CssClasses_.LABEL); //eslint-disable-line
    this.select_ = document.querySelector('.' + this.CssClasses_.SELECT); //eslint-disable-line
    console.log(this); //eslint-disable-line
    this.checkDisabled = () => {
      if (this.select_.disabled) {
        this.el.classList.add(this.CssClasses_.IS_DISABLED);
      } else {
        this.el.classList.remove(this.CssClasses_.IS_DISABLED);
      }
    };
    // const checkValidity = () => {
    //   if (this.select_.validity.valid) {
    //     this.el.classList.remove(CssClasses_.IS_INVALID);
    //   } else {
    //     this.el.classList.add(CssClasses_.IS_INVALID);
    //   }
    // };
    // /*eslint-disable*/
    // const disable = () => { //eslint-disable-line
    //   select_.disabled = true;
    //   updateClasses_();
    // };
    this.checkDirty = () => { //eslint-disable-line
      console.log(this.select_.value); //eslint-disable-line
      if (this.select_.value && this.select_.value.length > 0) {
        this.el.classList.add(this.CssClasses_.IS_DIRTY);
      } else {
        this.el.classList.remove(this.CssClasses_.IS_DIRTY);
      }
    };
    const updateClasses = () => {
      this.checkDisabled();
      // checkValidity();
      this.checkDirty();
    };

    const onFocus = () => { //eslint-disable-line
      this.el.classList.add(this.CssClasses_.IS_FOCUSED);
    };
    const onBlur = () => { //eslint-disable-line
      this.el.classList.remove(this.CssClasses_.IS_FOCUSED);
    };
    const onReset = () => { //eslint-disable-line
      // updateClasses();
    };

    this.select_.addEventListener('change', updateClasses);
    this.select_.addEventListener('focus', onFocus);
    this.select_.addEventListener('blur', onBlur);
    this.select_.addEventListener('reset', onReset);

    updateClasses();
    this.el.classList.add(this.CssClasses_.IS_UPGRADED);
    componentHandler.upgradeElements(this.el); //eslint-disable-line
  },
  update: function update(value) { //eslint-disable-line
    const logme =
      'name - ' + this.name + '<br>' + //eslint-disable-line
      'expression - ' + this.expression + '<br>' +
      'argument - ' + this.arg + '<br>' +
      'modifiers - ' + JSON.stringify(this.modifiers) + '<br>' +
      'value - ' + value; //eslint-disable-line
    console.log('logme = ' + logme); //eslint-disable-line
  },
  unbind: function undbind() {
    this.select_.removeEventListener('change', this.updateClasses);
    this.select_.removeEventListener('focus', this.onFocus);
    this.select_.removeEventListener('blur', this.onBlur);
    this.select_.removeEventListener('reset', this.onReset);
  },
};
