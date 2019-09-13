<template>
  <v-app>
    <v-app-bar app>
      <v-flex xs3>
        <v-img
          :src="require('./assets/soprasteria.png')"
          class="my-3"
          contain
          height="40"
        ></v-img>
      </v-flex>
      <v-spacer />
      <h1 class="headline font-weight-bold">Concours de rameur</h1>
      <v-flex xs1>
        <v-img
          :src="require('./assets/mucoviscidose.png')"
          class="my-3"
          contain
          height="100"
        ></v-img>
      </v-flex>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
