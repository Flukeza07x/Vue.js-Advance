<template>

    <!-- Toolbar -->
    <v-toolbar>
        <v-toolbar-title>{{ t('menu_product') }}</v-toolbar-title>
        <v-btn color="success" prepend-icon="mdi-plus-circle-outline" @click="OpenAddDialog">{{ t('add_product') }}</v-btn>
    </v-toolbar>

    <!-- Table -->
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
            <tr  v-for="(product, index) in products" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td class="text-end">
                    <v-btn color="info" icon="mdi-pencil" size="x-small" class="mr-2" @click="OpenEditDialog(product)"></v-btn>
                    <v-btn color="error" icon="mdi-delete" size="x-small" @click="openDeleteDialog(product.id)"></v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>

    <!-- Dialog for Add / Edit Product -->
    <v-dialog
        v-model="dialog" 
        persistent
        max-width="300px"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">{{ updateState ? t('edit_product') : t('add_product')}}</span>
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
                            :label="t('product_price') + ' (USD)'"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" @click="closeDialog">{{ t('btn_close') }}</v-btn>
                <v-btn v-if="!updateState" color="blue-darken-1" @click="addProduct">{{ t('btn_save') }}</v-btn>
                <v-btn v-if="updateState" color="blue-darken-1" @click="updateProduct">{{ t('btn_update') }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <!-- Dialog for Confirmed Delete -->
    <v-dialog
        v-model="dialog_delete" 
        persistent
        max-width="300px"
    >
        <v-card>
            <v-card-title><span class="text-h5">{{ t('msg_confirm_del_title') }}</span></v-card-title>
            <v-card-text>{{ t('msg_confirm_del_subtitle') }}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog_delete=false">{{ t('btn_no') }}</v-btn>
                <v-btn color="red" @click="deleteProduct">{{ t('btn_yes_delete') }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>


</template>

<script setup lang="ts">

import { ref , onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { db } from '../plugins/firebase'

// Use i18n
let { t, locale} = useI18n({
    inheritLocale: true,
    useScope: 'global'
})

// Constant for dialog close / open
const dialog = ref(false)

// Const for dialog delete
const dialog_delete = ref(false)

// Const for products from firebase firestore
const products: any = ref([])

// Const for product update (เมื่อมีการแก้ไขรายการจะเก็บไว้ในตัวแปรนี้)
const productTemp: any = ref({})

// Const for check state update (ไว้เช็คว่าผู้ใช้เปิดหน้าแก้ไขอยู่หรือไม่)
const updateState = ref(false)

// Const for delete product ID
const product_id = ref('')

// Const for product model input form
const product = ref({
    name: '',
    price: ''
})

// Const for count total product add
const count: any = ref(0)

// Method Open Add Dialog
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

    // Set Value to form
    productTemp.value = prdTemp
    product.value.name = prdTemp.name
    product.value.price = prdTemp.price
}

// Method Open Delete Dialog
const openDeleteDialog = (pid: any) => {
    dialog_delete.value = true
    product_id.value = pid
}

// Method Close Dialog
const closeDialog = () => {
    dialog.value = false
}

// Fetch Products from firebase
onMounted(() => {
    db.collection("products")
    .orderBy('created_at', 'desc')
    .onSnapshot((querySnapshot) => {
        products.value = []
        querySnapshot.forEach((doc) => {
            products.value.push(doc.data()) 
            // console.log(products.value[0])
        })
    })

    // Count total new products
    db.collection("product_counts")
        .onSnapshot((querySnapshot) => {
        count.value = querySnapshot.docs[0].data()
        // console.log(count.value.total)
    })
})

// Add New Product to firebase
const addProduct = () => {
    db.collection("products")
    .add({
        id: "",
        name: product.value.name,
        price: product.value.price,
        created_at: Date.now()
    })
    .then(function(docref) {
        console.log(docref.id)
        db.collection("products")
        .doc(docref.id)
        .update({ id: docref.id })
    })

    // Reset Form
    product.value.name = ""
    product.value.price = ""

    // Update total count
    db.collection("product_counts")
    .doc('p_count')
    .update({
        total: count.value.total + 1
    })
}

// Update Product to firease
const updateProduct = () => {

    let p = product.value

    db.collection("products")
    .doc(productTemp.value.id)
    .update({
        name: p.name,
        price: p.price
    })

    // Close Dialog
    dialog.value = false

}

// Delete Product from firebase
const deleteProduct = ()  => {

    db.collection("products")
    .doc(product_id.value)
    .delete()

    // Close dialog delete
    dialog_delete.value = false
}


</script>

<style scoped>

</style>