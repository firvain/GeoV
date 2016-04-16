<template>
  <form id="search" name="search" class="search">
    <div class="mdl-grid search__grid">
      <div class="mdl-cell mdl-cell--12-col search__cell search__cell-row">
        <mdl-radio name="estate-type" class="search__radio" v-el:estate-type-rent :checked.sync="estateTypeCheck" value="rent">Rent</mdl-radio>
        <mdl-radio name="estate-type" v-el:estate-type-sale class="search__radio" :checked.sync="estateTypeCheck" value="sale">Sale</mdl-radio>
      </div>
       <myselect label="Category" id="category-select" :value.sync="category" :options="categories" :ismain="true"></myselect>
       <myselect label="Subcategory" id="subcategory-select" :value.sync="subcategory" :options="subcategories" v-if="ok" :ismain="false"></myselect>
      <div class="mdl-cell mdl-cell--12-col search__cell search__cell--row">
        <mdl-checkbox class="mdl-js-ripple-effect search__checkbox" :checked.sync="areaCheck">Choose Area of Search</mdl-checkbox>
      </div>
      <div id='test' class="mdl-cell mdl-cell--12-col search__cell search__cell--col">
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="parking">Parking</mdl-checkbox>
          <mdl-checkbox v-show="y" class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="furnished">Furnished</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="newly">Newly Build</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="heating">Heating</mdl-checkbox>
          <mdl-checkbox v-show="y" class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="cooling">Cooling</mdl-checkbox>
      </div>
      <div class="mdl-cell mdl-cell--12-col search__cell">
        <mdl-button v-mdl-ripple-effect id="search" class="search_button" @click.stop.prevent accent raised>search</mdl-button>
        <mdl-button v-mdl-ripple-effect id="cancel" class="search_button" @click.stop.prevent>cancel</mdl-button>
      </div>
    </div>
  </form>
</template>


<script>
import config from '../../server/config/config.js';
import myselect from './select';
export default {
  components: {
    myselect,
  },
  data() {
    return {
      estateTypeCheck: ['rent'],
      areaCheck: false,
      filterCheck: [],
      y: true,
      category: 'Residential',
      categories: [],
      subcategory: '',
      subcategories: [],
      ok: false,
    };
  },
  ready() {
    const radios = document.querySelectorAll('.search__radio');
    const changeHandler = (event) => {
      const val = event.target.value;
      if (val === 'rent') {
        this.$data.y = true;
      } else {
        this.$data.y = false;
      }
    };

    for (const value of radios) {
      value.querySelectorAll('input')[0].addEventListener('change', changeHandler);
    }
    this.getCategories();
    // this.$on('changeCategory', () => {

    // });
  // Array.prototype.forEach.call(radios, (radio) => {
  //   radio.addEventListener('change', changeHandler);
  // });
  },
  events: {
    changeCategory(id) {
      this.$data.ok = true;
      this.getSubCategories(id);
    },
  },
  methods: {
    getCategories() {
      this.$http({
        url: `${config.endpoint}/api/category`,
        method: 'GET',
      })
      .then((response) => {
        // const arr = Object.keys(response.data).map((k) => response.data[k]);
        this.$data.categories = response.data;
      })
      .catch((ErrorCallback) => {
        console.log(ErrorCallback.status); //eslint-disable-line
      });
    },
    getSubCategories(id) {
      this.$http({
        url: `${config.endpoint}/api/category/${id}`,
        method: 'GET',
      })
      .then((response) => {
        // const arr = Object.keys(response.data).map((k) => response.data[k]);
        // console.log(arr);
        this.$data.subcategories = response.data;
        this.$data.subcategory = response.data[0].name;
      })
      .catch((ErrorCallback) => {
        console.log(ErrorCallback.status); //eslint-disable-line
      });
    },
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
