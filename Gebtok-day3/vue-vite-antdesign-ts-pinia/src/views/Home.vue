<template>
    <div>
      <a-button>Deaflut button</a-button>
      <a-button type="primary">Deaflut button</a-button>
      <a-button type="dashed">Deaflut button</a-button>
      
      
    </div>

    <hr>

    <!-- IMport Some Widget -->
     <Space>
    <Button type="default">Default Button</Button>
    <Button type="primary">Default Button</Button>
    <Button type="dashed" danger>Default Button</Button>
    <Button type="text">Default Button</Button>
    <Button type="link">Link</Button>
    </Space>

    <hr>

    <!-- Ant Design Component -->
<div>
    <a-row>
        <a-col span="12">
            <a-alert message="Hello"/>
            <a-alert type="success" message="Hello"/>
            <a-alert type="info" message="Hello"/>
            <a-alert type="warning" message="Hello"/>
            <a-alert type="error" message="Hello"/>
        </a-col>
        <a-col span="12">
            <a-button type="primary">Click me</a-button>
            <a-skeleton avatar paragraph="4"></a-skeleton>
        </a-col>
    </a-row>
</div>

<!-- And design icon  -->
<rocket-outlined :style="{color:'pink', fontSize: '100px'}" />  
<rocket-filled :style="{color:'blue', fontSize: '100px'}"/>
<rocket-two-tone two-tone-color="yellow" :style="{ fontSize: '100px'}"/>
<rocket-two-tone two-tone-color="black" :rotate="45" :style="{ fontSize: '100px'}"/>
<rocket-outlined spin :style="{color:'pink', fontSize: '100px'}" />  

<hr>
<!-- MOdal -->
 <div>
    <Space>
        <a-button type="primary" @click="Showmodal">Open Modal</a-button>
        <a-modal v-model:visible="visible" title="BAsic_modal" @ok="handleOk">
            <p>Some content นะจ๊ะ</p>
            <p>Some content นะจ๊ะ</p>
            <p>Some content นะจ๊ะ</p>
            <p>Some content นะจ๊ะ</p>
            <p>Some content นะจ๊ะ</p>

        </a-modal>


        <a-button type="dashed" @click="showDeleteConfirm">Delete</a-button>
    </Space>
 </div>

  </template>
  
  <script setup lang="ts">


  import { Button, Space, Modal } from 'ant-design-vue'
  import { RocketOutlined, RocketFilled, RocketTwoTone, ExclamationCircleOutlined } from '@ant-design/icons-vue'
  import { ref, createVNode} from 'vue';
  

  // MOdal 
  const visible = ref<boolean>(false)

  // Handle Modal
  const Showmodal = () => [
  visible.value = true
  ]

  //handle OK Button

  const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false
  }

//  MEthod Delete 
const showDeleteConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      })
    }


  </script>
  
  <style scoped>
  
  </style>