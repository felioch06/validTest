<template>
  <v-row justify="center" align="center">
    <v-col cols="8">
      <v-card class="mt-10 pb-5">
        <v-card-title primary-title class="primary">
          <h2 class="white--text font-weight-medium">Crear</h2>
        </v-card-title>
        <v-card-text class="mt-10 px-8">
          <label class="text-body text--black" for="name">Nombre</label>
          <v-text-field v-model="form.name" solo></v-text-field>

          <label class="text-body text--black" for="name">Apellido</label>
          <v-text-field v-model="form.lastName" solo></v-text-field>
        </v-card-text>
        <v-card-actions class="px-8">
          <v-spacer></v-spacer>
          <v-btn
            class="px-10"
            color="error"
            @click="$router.push({ path: '/' })"
            >Volver</v-btn
          >
          <v-btn class="px-10" color="success" @click="Create">Crear</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        lastName: "",
      },
    };
  },
  methods: {
    Create() {
        if(this.form.name !== "" && this.form.lastName !== "" ){


            this.$store.dispatch("users/Create", this.form).then((res) => {
              this.form = {
                name: "",
                lastName: "",
              };
              this.$store.commit('toast/setToastText', "Creado correctamente")
              this.$store.commit('toast/setToastVariant', 'toast--success')
                  this.$router.push({ path: "/" });
            });
        }else{
            this.$store.commit('toast/setToastText', "Debes llenar todos los campos")
            this.$store.commit('toast/setToastVariant', 'toast--danger')
        }
    },
  },
};
</script>
