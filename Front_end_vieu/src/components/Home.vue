<template>
  <div>
    <header class="head">
      <h1 class="text-center text-white m-0">"Una sociedad se mide por la manera en que cuida a sus ciudadanos de edad avanzada"</h1>
    </header>
    <h2 class="ms-5 mt-5">Graficas</h2>
    <div class="ms-5 mt-5">
      <label class="me-3 fw-bold" for="barrios">Información por barrio: </label>
      <select type="text" id="barrios" name="barrios">
        <option value=""></option>
        <option v-for="barrio, i in barriosInfo" :key="i">{{ barrio.barrio }}</option>
      </select>
      <button class="btn bg-primary ms-3 p-1 text-white" >Elegir</button>
    </div>
    <div class="row m-0">
      <GChart class="col-12" type="ColumnChart" :options="options" 
      :data="[['' ,barriosInfo[0].barrio, barriosInfo[1].barrio, barriosInfo[2].barrio, barriosInfo[3].barrio, barriosInfo[4].barrio], [1 ,14, 15 ,15 ,16, 16]]"></GChart>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts"
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    GChart
  },
  data() {
    return {
      barrios: [],
      options: {
        chart: {
          title: "Barrios",
          subtitle: "Cantidad de ancianos viviendo solos"
        },
        width: 900,
        height: 500
      },
      
    };
  },
  methods:{
    
  },
  created(){
    this.$store.dispatch('obtenerBarrios')
  },
  computed: {
    ...mapState(['barriosInfo'])
  }
}
</script>

<style scoped>
.head {
  background-image: url("../../public/abuelo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}
</style>
