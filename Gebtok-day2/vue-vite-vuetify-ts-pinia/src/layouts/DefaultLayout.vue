

<template>

   <v-app id="inspire">
     <v-navigation-drawer v-model="drawer">
       <v-list>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                    title="John Doe"
                    subtitle="john@email.com"
                    class="pa-md-8">
                    <template v-slot:append>
                        <v-btn
                            size="small"
                            variant="text"
                            icon="mdi-menu-down"
                        ></v-btn>
                    </template>
        </v-list-item>
       </v-list>

       <v-divider></v-divider>

       <v-list nav>
        <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard" to="/Dashboard">{{t('menu_dashboard')}}</v-list-item>
        <v-list-item prepend-icon="mdi-storefront" value="product" to="/Product">{{t('menu_product')}}</v-list-item>
        <v-list-item prepend-icon="mdi-cart" value="Order" to="/Order">{{t('menu_order')}}</v-list-item>
        <v-list-item prepend-icon="mdi-chart-areaspline" value="reports" to="/Report">{{t('menu_report')}}</v-list-item>
        <v-list-item prepend-icon="mdi-cog" value="Setting" to="/Setting">{{t('menu_setting')}}</v-list-item>

       </v-list>

       <v-divider class="mt-16"></v-divider>

      <v-list nav>
          <v-list-item prepend-icon="mdi-logout-variant" value="logout" >{{t('menu_logout')}}</v-list-item>
      </v-list>



     </v-navigation-drawer>
 
     <v-app-bar>

       <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-app-bar-title>{{ t(`${route.meta.header}` ) }}</v-app-bar-title>
      
       <v-spacer></v-spacer>

      <!-- Notification Count -->
       <v-btn class="text-none" stacked @click="clearCount">
        <v-badge v-if="count.total > 0" color="error" :content="count.total">
          <v-icon>mdi-store-outline</v-icon>
        </v-badge>
         <v-icon v-if="count.total <= 0">mdi-store-outline</v-icon>
       </v-btn>
       <!-- End Notification Count -->

      <v-menu open-on-click>
        
        <template v-slot:activator="{ props}">
          <v-btn v-bind="props">
            {{activeLang}}
            <v-icon small right icon="mdi-menu-down" />
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item v-for="(value, key) in langs" :key="key">
           <v-btn block variant="plain" @click="handleMenuItemClick(key.toString())"> {{ value }} </v-btn>
          </v-list-item>
        </v-list>

      </v-menu>

      <v-btn v-if="!theme.global.current.value.dark" prepend-icon="mdi-white-balance-sunny" @click="toggleTheme()"></v-btn>
      <v-btn v-if="theme.global.current.value.dark" prepend-icon="mdi-moon-waning-gibbous" @click="toggleTheme()"></v-btn>
     </v-app-bar>
 
     <v-main>
       <router-view />
     </v-main>

   </v-app>
 </template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router'
import { db } from '../plugins/firebase'
import router from '../router/index';

const count: any = ref(0)

//fetch Product Count
onMounted(() => {
  db.collection("product_count")
  .onSnapshot((querySnapshot) =>{
    count.value = querySnapshot.docs[0].data()
    console.log(count.value.total);
  })
})

// Get Meta Router
const route = useRoute()
// console.log(route.meta.header);

//CLear Count Total
const clearCount = () => {

  //Push to product page
  router.push('/product')

  //Update total count in firebase
  db.collection("product_count")
  .doc('p_count')
  .update({
    total: 0
  })
}

// Toggle Drawer
const drawer = ref(true)

const theme: any = useTheme()

// get theme from local storage
if(localStorage.getItem('theme_store') !== null){
  theme.global.name.value = localStorage.getItem('theme_store')?.toString()
}else{
  theme.global.name.value = 'light'
}

// Toggle theme
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light':'dark'
  //set to local storage 
  localStorage.setItem('theme_store', theme.global.name.value)
}
// console.log( theme.global.name.value);


//USe i18n
let { t, locale } = useI18n({
  inheritLocale: true,
  useScope: 'global'
})
// console.log(locale.value);


// Switch Multi Language

const langs: any = {
        'en': 'English',
        'th': 'ไทย',
        'la': 'ລາວ',
        'kr': '한국어'
}

// Toggle Language
let activeLang = ref(langs[`${locale.value}`])

function handleMenuItemClick(lang: string) {
  activeLang.value = langs[lang]
  // console.log(lang);
  // console.log(activeLang.value);
  //Set new locale
  locale.value = lang

  //Set Language to localStorage
  localStorage.setItem('lang_store', lang)
}

</script>

<style scoped>

</style>