<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-button" @click="closeModal">×</span>
        <h3>{{ product.product }}</h3>
          <div class="description-container">
            <div class="image-container box">
              <img :src="product.image || placeholderImage" alt="Product image" />
            </div>
            <div class="text-container box">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis vitae dolorum tempore nemo, voluptates repellendus quisquam iure est perspiciatis itaque, magni ea! Qui eos doloremque ab repudiandae quam amet, temporibus ea pariatur ex deserunt reiciendis, saepe aliquam facilis! Velit doloribus debitis deserunt quidem unde iure quaerat delectus quia nostrum expedita minus</div>
              <br>
              <div>voluptatibus officiis omnis harum dolores amet at dolore, saepe sint magni dolorum, quasi alias nam. Ad ea illum nesciunt sed est. Veniam pariatur iure vitae iusto rem. Iste sed quasi ab rem odit voluptas earum ad fugit temporibus consequuntur asperiores voluptates atque, aspernatur cum. At doloremque culpa illum?</div>
            </div>
           
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import "@/components/ModalComponent.scss";
  export default {
    props: {
      product: Object,
      isVisible: Boolean,
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
    data() {
      return {
        placeholderImage: 'https://via.placeholder.com/150?text=No+Image',
      };
    },
  };
  </script>
  
  
