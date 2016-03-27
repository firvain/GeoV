<template>
  <form id="search" name="search" class="search">
    <div class="mdl-grid search__grid">
      <div class="mdl-cell mdl-cell--12-col search__cell search__cell-row">
        <mdl-radio name="estate-type" class="search__radio" v-el:estate-type-rent :checked.sync="estateTypeCheck" value="rent">Rent</mdl-radio>
        <mdl-radio name="estate-type" v-el:estate-type-sale class="search__radio" :checked.sync="estateTypeCheck" value="sale">Sale</mdl-radio>
      </div>
      <div class="mdl-cell mdl-cell--12-col search__cell search__cell--row">
        <mdl-checkbox class="mdl-js-ripple-effect search__checkbox" :checked.sync="areaCheck">Choose Area of Search</mdl-checkbox>
      </div>
      <div class="mdl-cell mdl-cell--12-col search__cell search__cell--col">
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="parking">Parking</mdl-checkbox>
          <mdl-checkbox v-show="y" class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="furnished">Furnished</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="newly">Newly Build</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="heating">Heating</mdl-checkbox>
          <mdl-checkbox v-show="y" class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="cooling">Cooling</mdl-checkbox>
      </div>
      <mdl-select label="Country" id="contry-select" :value.sync="country" :options="countries"></mdl-select>
      <div class="mdl-cell mdl-cell--12-col search__cell">
        <mdl-button v-mdl-ripple-effect id="search" class="search_button" @click.stop.prevent accent>search</mdl-button>
        <mdl-button v-mdl-ripple-effect id="cancel" class="search_button" @click.stop.prevent>cancel</mdl-button>
      </div>
    </div>
  </form>
</template>


<script>
  export default {
    components: {
    },
    data() {
      return {
        estateTypeCheck: ['rent'],
        areaCheck: false,
        filterCheck: [],
        y: true,
        country: 'Spain',
        countries: [{
          name: 'Russia',
          value: 'ru',
        },
        {
          name: 'Spain',
          value: 'es',
        },
        {
          name: 'France',
          value: 'fr',
        },
        {
          name: 'China',
          value: 'cn',
        },
        ],
      };
    },
    ready() {
      const radios = document.querySelectorAll('.search__radio');
      /*eslint-disable*/
      const changeHandler = (event) => {
        let val = event.target.value;
        switch (val) {
          case 'rent':
          this.$data.y = true;
          break;
          case 'sale':
          this.$data.y = false;
          break;
        }
      }

      for (const value of radios) {
        value.querySelectorAll('input')[0].addEventListener('change', changeHandler);
      }
    // Array.prototype.forEach.call(radios, (radio) => {
    //   radio.addEventListener('change', changeHandler);
    // });
  },
};
</script>

<style lang='scss'>
.search {
  &__cell {
  display: flex;
  justify-content: space-around;
    &--col{
      flex-direction:column;
        label {
          white-space: nowrap;
        }
    }
    &--row{
      flex-direction:row;
    }
  }
}
</style>
