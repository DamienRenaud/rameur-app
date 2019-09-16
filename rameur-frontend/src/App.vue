<template>
  <v-app>
    <v-app-bar app>
      <v-flex xs4>
        <v-img
          :src="require('./assets/soprasteria.png')"
          class="my-3"
          contain
          height="40"
          position="left center"
        ></v-img>
      </v-flex>
      <v-flex xs4>
        <h1 class="font-weight-bold text-center primary--text">
          Cagnotte : {{ cagnotte }} 
          <v-icon
            large
            color="primary"
            class="pb-1"
          >
            {{ euroIcon }}
          </v-icon>
        </h1>
      </v-flex>
      <v-spacer />
      <h1 class="headline font-weight-bold">Challenge solidaire</h1>
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
      <MainBloc v-on:updateCagnotte="cagnotte = $event"/>
    </v-content>
  </v-app>
</template>

<script>
import MainBloc from './components/MainBloc';
import { mdiCurrencyEur } from '@mdi/js';

export default {
  name: 'App',
  components: {
    MainBloc,
  },
  data: () => ({
    cagnotte: 0,
    euroIcon: mdiCurrencyEur
  }),
};
</script>
