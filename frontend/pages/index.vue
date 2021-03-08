<template>
  <v-row justify="center" align="center">
    <v-col cols="8">
      <div class="d-flex my-5 justify-space-between">
        <h2 class="black--text">Listado</h2>
        <v-btn color="accent" @click="$router.push({ path: '/create' })"
          >Crear nuevo</v-btn
        >
      </div>
      <v-data-table
        v-model="form.process"
        :headers="headers"
        :items="items"
        show-select
        hide-default-footer
        disable-sort
        class="elevation-3"
        item-key="id"
      >
        <template v-slot:item.process="{ item }">
          <v-btn
            elevation="0"
            color="#cdffc9"
            class="text-none px-7"
            style="color: #2afc00; border: 1px solid #2afc00"
            v-if="item.process"
          >
            Procesado
          </v-btn>
          <v-btn
            elevation="0"
            color="#FC2B5814"
            class="text-none"
            style="color: #ff2f5d; border: 1px solid #fc2b5860"
            v-else
          >
            No Procesado
          </v-btn>
        </template>
      </v-data-table>
      <v-btn class="mt-3 d-flex ml-auto" color="success" @click="process"
        >Procesar</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Id",
          align: "center",
          value: "id",
        },
        {
          text: "Nombre",
          align: "center",
          value: "name",
        },
        {
          text: "Apellido",
          align: "center",
          value: "lastName",
        },
        {
          text: "Procesado",
          align: "center",
          value: "process",
        },
      ],
      items: [],
      form: {
        process: [],
      },
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      this.$store.dispatch("users/All").then((res) => {
        this.items = res.data.data;
      });
    },
    process() {
      if(this.form.process.length === 0){
        this.$store.commit('toast/setToastText', "Debes seleccionar mínimo 1 item")
        this.$store.commit('toast/setToastVariant', 'toast--danger')
        return
      }
      this.$store.dispatch("users/Process", this.form).then((res) => {
        this.form.process = [];
        this.getAll();
      });
    },
  },
};
</script>
