<script>
import { useLife } from '../stores/life';

export default {
  setup() {
    const life = useLife()
    return { life }
  }
}

</script>


<template>
  <div class="about">
    <h1>{{ life.getComment }}</h1>
  </div>
  <div id='gamearea'>
  	<legend class='text-muted' style='position: absolute;'>
  		<small>Thirst: {{ life.getThirst }}</small><br/>
        <small>Hunger: {{ life.getHunger }}</small><br/>
        <small>Stuffing: {{ life.getStuffing }}</small><br/>
        <small>Hygiene: {{ life.getHygiene }}</small><br/>
        <small>Addiction: {{ life.getAddiction }}</small><br/>
        <small>Age: {{ life.getAge/100 }}</small><br/>
        <small>Loneliness: {{ life.getLoneliness }}</small><br/>
        <small>Boredom: {{ life.getBoredom }}</small><br/>
        <small>Sanity: {{ life.getSanity }}</small><br/>
        <small>Is Dead: {{ life.isDead }}</small>
    </legend>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}

#gamearea{
	border: 1px solid #fff;
	min-height: 300px;
	height: 30vh;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
}
</style>
