<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex
        mb-5
        xm12
      >
        <h1 class="headline font-weight-bold mb-3">Ajouter un rameur</h1>
      </v-flex>
      <v-flex mb-5 xs12>
        <v-form v-model="valid" ref="form">
            <v-container>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="rameur.pseudo"
                        label="Pseudo"
                        :rules="pseudoRules"
                        :counter="15"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="rameur.distance"
                        label="Distance réalisée (m)"
                        type="number"
                        :rules="distanceRules"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="rameur.contact"
                        label="Contact (e-mail ou téléphone)"
                        :rules="contactRules"
                        :counter="20"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer />
                <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                >
                    Reset Form
                </v-btn>
                <v-btn
                    :disabled="!valid"
                    color="success"
                    type="submit"
                    @click="validate"
                >
                    Validate
                </v-btn>
            </v-row>
            </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      valid: false,
      rameur: {
        pseudo: '',
        distance: '',
        contact: ''
      },
      pseudoRules: [
        v => !!v || 'Merci de préciser un pseudo',
        v => (v && v.length <= 15) || '15 caractères maximum',
      ],
      distanceRules: [
        v => !!v || 'Merci de préciser la distance réalisée',
        v => v >= 0 || 'La distance ne peut pas être négative',
      ],
      contactRules: [
        v => !!v || 'Merci de préciser un moyen de contact',
        v => (v && v.length <= 20) || '20 caractères maximum',
      ]
  }),
  methods: {
    validate () {
        if (this.$refs.form.validate()) {
            this.$emit('newRameur', Object.assign({}, this.rameur));
            this.reset();
        }
    },
        reset () {
            this.$refs.form.reset()
        },
    },
};
</script>
