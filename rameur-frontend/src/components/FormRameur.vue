<template>
  <v-card>
    <v-card-title>
      <h1 class="headline font-weight-bold">Ajouter un rameur</h1>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-layout
          text-center
          wrap
        >
          <v-flex mb-5 xs12>
            <v-form v-model="valid" ref="form">
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="rameur.name"
                    label="Nom et prénom"
                    :rules="pseudoRules"
                    :counter="30"
                    required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="rameur.school"
                    label="Ecole"
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="rameur.contact"
                    label="Contact (e-mail ou téléphone)"
                    :rules="contactRules"
                    required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="rameur.distance"
                    label="Distance réalisée (m)"
                    type="number"
                    :rules="distanceRules"
                    required
                  ></v-text-field>
                </v-row>
              </v-container>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container> 
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="error"
        class="mr-4"
        @click="cancel"
      >
        Annuler
      </v-btn>
      <v-btn
        color="warning"
        class="mr-4"
        @click="reset"
      >
        Effacer
      </v-btn>
      <v-btn
        :disabled="!valid"
        color="success"
        type="submit"
        @click="validate"
      >
        Ajouter
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    rameur: {
      name: '',
      school: '',
      contact: '',
      distance: ''
    },
    pseudoRules: [
      v => !!v || 'Merci de préciser un pseudo',
      v => (v && v.length <= 30) || '30 caractères maximum',
    ],
    distanceRules: [
      v => !!v || 'Merci de préciser la distance réalisée',
      v => v >= 0 || 'La distance ne peut pas être négative',
    ],
    contactRules: [
      v => !!v || 'Merci de préciser un moyen de contact'
    ]
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.$emit('newRameur', Object.assign({}, this.rameur));
        this.reset();
        this.$emit('change', false);
      }
    },
    reset () {
      this.$refs.form.reset();
    },
    cancel () {
      this.reset();
      this.$emit('change', false)
    }
  },
};
</script>
