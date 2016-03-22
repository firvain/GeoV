<template>
  <form id="search" name="search" class="search">
    <div class="mdl-grid search__grid">
      <div class="mdl-cell mdl-cell--12-col search__cell search__cell-row">
        <mdl-radio name="estate-type" class="search__radio" id="estate-type-rent" :checked.sync="estateTypeCheck" value="rent">Rent</mdl-radio>
        <mdl-radio name="estate-type" id="estate-type-sale" class="search__radio" :checked.sync="estateTypeCheck" value="sale">Sale</mdl-radio>
      </div>
      <div class="mdl-cell mdl-cell--12-col search__cell search__cell--row">
          <mdl-checkbox class="mdl-js-ripple-effect search__checkbox" :checked.sync="areaCheck">Choose Area of Search</mdl-checkbox>
      </div>
      <div v-show="y" class="mdl-cell mdl-cell--12-col search__cell search__cell--col">
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="parking">Parking</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="furnished">Furnished</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="newly">Newly Build</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="heating">Heating</mdl-checkbox>
          <mdl-checkbox class="mdl-js-ripple-effect search__filters" :checked.sync="filterCheck" value="cooling">Cooling</mdl-checkbox>
      </div>
      <div class="mdl-cell mdl-cell--12-col search__cell">
        <mdl-button v-mdl-ripple-effect id="search" class="search_button" @click.stop.prevent accent>search</mdl-button>
        <mdl-button v-mdl-ripple-effect id="cancel" class="search_button" @click.stop.prevent>cancel</mdl-button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  data() {
    return {
      estateTypeCheck: ['rent'],
      areaCheck: false,
      filterCheck: [],
      y: false,
    };
  },
  ready() {
    console.log(this.$data.y) //eslint-disable-line
    // console.log(this.$refs) //eslint-disable-line
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
