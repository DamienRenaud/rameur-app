<template>
  <v-container>
    <v-layout
      text-center
      wrap
      class="mt-5"
    >
      <FormRameur v-on:newRameur="addRameur"/>

      <v-flex
        mb-5
        xm12
      >
        <h1 class="headline font-weight-bold mb-3">Classement des rameurs</h1>
      </v-flex>
      <v-flex mb-5 xs12>
        <v-card>
          <v-card-title>
            <v-flex xs2>
              <v-text-field
                v-model="search"
                label="Search"
                :append-icon="searchIcon"
                single-line
                hide-details
              ></v-text-field>
            </v-flex>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="sortedParticipants"
            :items-per-page="10"
            :search="search"
            no-data-text="Pas encore de rameurs !"
            sort-by="distance"
            :sort-desc="true"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-icon
                small
                @click="deleteRameur(item)"
              >
                 {{ deleteIcon }}
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormRameur from './FormRameur';
import { mdiDelete, mdiMagnify } from '@mdi/js';
import axios from "axios";
import { server } from "../config";

export default {
  components: {
    FormRameur
  },
  data: () => ({
    search: '',
    deleteIcon: mdiDelete,
    searchIcon: mdiMagnify,
    headers: [
      {
        text: 'Position',
        align: 'left',
        sortable: false,
        value: 'position',
      },
      { text: 'Rameur', align: 'center', sortable: false, value: 'name' },
      { text: 'Distance (m)', align: 'center', sortable: false, value: 'distance' },
      { text: 'Actions', align: 'center', value: 'action', width: 20, sortable: false },
    ],
    participants: []
  }),
  methods: {
    addRameur(newRameur) {
      axios.post(`${server.baseURL}/rameur/create`, newRameur).then(() => {
        this.getParticipants();
      });
    },
    deleteRameur(rameur) {
      axios.delete(`${server.baseURL}/rameur/delete?rameurID=${rameur._id}`).then(() => {
        this.getParticipants();
      });
    },
    getParticipants() {
      axios.get(`${server.baseURL}/rameur/rameurs`).then(response => {
        this.participants = response.data;
        this.$emit('updateCagnotte', this.participants.length);
      });
    }
  },
  computed: {
    sortedParticipants () {
      function compare(a, b) {
        if (a.distance > b.distance)
          return -1;
        if (a.distance < b.distance)
          return 1;
        return 0;
      }

      const sorted = this.participants.slice().sort(compare);      
      return sorted.map((item, index) => ({
        position: index + 1,
        ...item
      }));
    }
  },
  created() {
    this.getParticipants();
  }
};
</script>
