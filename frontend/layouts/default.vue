<template>
<div>

  <v-app>
    <v-main>
    <v-app-bar color="primary" dark>
            <v-toolbar-title>VALID</v-toolbar-title>
    </v-app-bar>
      <v-container>
        <nuxt />
      </v-container>
      <Toast></Toast>
    </v-main>
  </v-app>
</div>
</template>

<script>
import Toast from '@/components/Toast'
export default {
  components:{
    Toast
},
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
