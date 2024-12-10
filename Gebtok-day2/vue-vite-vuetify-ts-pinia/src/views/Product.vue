<template>

<!-- Toolbar  -->

<v-toolbar>
    <v-toolbar-title>{{ t('menu_product')}}</v-toolbar-title>

    <v-btn color="success" prepend-icon="mdi-plus-circle-outline" @click="OpenAddDialog">{{ t('add_product')}}</v-btn>
</v-toolbar>

<v-table>
        <thead>
            <tr>
                <th class="text-left" style="background-color: teal; color: #fff;">#</th>
                <th class="text-left" style="background-color: teal; color: #fff;">{{ t('product_name') }}</th>
                <th class="text-left" style="background-color: teal; color: #fff;">{{ t('product_price') }}</th>
                <th class="text-end" style="background-color: teal; color: #fff;">{{ t('product_manage') }}</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{index+1}}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td class="text-end">
                <v-btn color="info" icon="mdi-pencil" size="x-small" class="mr-2" @click="OpenEditDialog(product)"></v-btn>
                <v-btn color="error" icon="mdi-delete" size="x-small" @click="openDeleteDialog(product.id)"></v-btn>
            </td>
          </tr>
        </tbody>
    </v-table>

    <!-- Dialog for Add / Edit Produt -->
     <v-dialog
        v-model="dialog" 
        persistent
        max-width="300px"
        transition="dialog-transition"
     >
        <v-card>
            <v-card-title>
                <span class="text-h5">{{ updateState ?  t('edit_product') : t('add_product')  }}</span>
            </v-card-title>
            <v-card-text>

                <v-row>
                    <v-col>
                        <v-text-field
                        v-model="product.name"
                            :label="t('product_name')"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                               v-model="product.price"
                            :label="t('product_price') + ' (usd) '"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" @click="closeDialog">{{t('btn_close')}}</v-btn>
                <v-btn v-if="!updateState" color="blue-darken-1" @click="addProduct">{{t('btn_save')}}</v-btn>
                <v-btn v-if="updateState" color="blue-darken-1" @click="updateProduct">{{t('btn_update')}}</v-btn>
            </v-card-actions>
        </v-card>
     </v-dialog>


<!-- Dialog for Confirm Delete -->
<v-dialog
        v-model="dialog_delete" 
        persistent
        max-width="300px"
     
     >
        <v-card>
            <v-card-title> <span class="text-h5">{{ t('msg_confirm_del_title') }}</span>
                <v-card-text>{{ t('msg_confirm_del_subtitle') }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog_delete=false">{{ t('btn_no') }}</v-btn>
                    <v-btn color="red" @click="deleteProduct" >{{ t('btn_yes_delete') }}</v-btn>
                </v-card-actions>
            </v-card-title>
        </v-card>
        </v-dialog>

</template>

<script setup lang="ts">

import { ref , onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { db } from '../plugins/firebase'
import { tr } from 'vuetify/lib/locale/index.js';
import { create } from 'domain';
import { privateDecrypt } from 'crypto';


// Use i18n
let { t, locale } = useI18n({
    inheritLocale: true,
    useScope: 'global'
})

//Const for Dialog close / open

const dialog = ref(false)

//Const for dialog delete 
const dialog_delete = ref(false)

//Const for products from firebase firestore

const products: any = ref([])

//const for  update  (เมื่อแก้ไขจะเก็บค่าไว้ในนี้นะจ๊ะจุ๊บๆ)
const producttemp: any = ref({})

// const for check state update (ไว้เช็คผู้ใช้แก้ไขอยู่หรือไม่)
const updateState = ref(false)

// const for delete product ID
const product_id = ref('')

//const for product model input form firebase
const product = ref({
    name: '',
    price: ''
})

//Const For count total Product add
const count: any = ref(0)
//Method Open add  Dialog 
const OpenAddDialog = () => {
    dialog.value = true

    updateState.value = false
    product.value.name = ""
     product.value.price = ""
}

// Method Open Edit Product Dialog 
const OpenEditDialog = (prdTemp: any) => {
    // Open Dialog
    dialog.value = true

 

    // Update State 
    updateState.value = true

    // Set value to form
    producttemp.value = prdTemp
    product.value.name = prdTemp.name
    product.value.price = prdTemp.price
}
//Method open Delete Dialog
const openDeleteDialog = (pid: any) => {

dialog_delete.value = true
product_id.value = pid

}

// Method CLose Dialog
const closeDialog = () => {
    dialog.value = false
}

// Fetch Products from firebase
onMounted(() => {
    db.collection("products")
    .orderBy ('create_at','desc' )
    .onSnapshot((querySnapshot) => {
        products.value = []
        querySnapshot.forEach((doc) => {
            products.value.push(doc.data()) 
            //  console.log(products.value[0])
        })
    })  

    //Count total new Product
    db.collection("product_count")
  .onSnapshot((querySnapshot) =>{
    count.value = querySnapshot.docs[0].data()
    // console.log(count.value.total);
  })
})



// Add New Product to firebase
const addProduct = () => {
    db.collection("products")
    .add({
        id: "",
        name: product.value.name,
        price: product.value.price,
        create_at: Date.now()
    })
    .then(function(docref){
        console.log(docref.id)
        db.collection("products")
        .doc(docref.id)
        .update({id: docref.id})
    })

    //reset form
    product.value.name = ""
    product.value.price = ""

    //Update total count
    db.collection("product_count")
    .doc('p_count')
    .update({
        total: count.value.total + 1
    })
  

}

// Update Prduct to firebase
const updateProduct = () => {
    let p = product.value
    db.collection("products")
    .doc(producttemp.value.id)
    .update({
        name: p.name,
        price : p.price
    })

    // //Reset form
    // product.value.name = ""
    // product.value.price = ""

    // //Update Edit Statate 
    // updateState.value = false
    //Clsoe  Dialog form
    dialog.value = false

}

//Delete Product from firebase
const deleteProduct = () => {
    db.collection('products')
    .doc(product_id.value)
    .delete()
    // Close Dialog
    dialog_delete.value = false
}


</script>
<style scoped>

</style>