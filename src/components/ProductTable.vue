<template>
    <div class="product-table-container">
      <div class="product-title-count">
        <span class="table-title">Products</span><span class="table-count">{{ filteredProducts.length }} of {{ products.length }} results</span> 
      </div>
      <table class="product-table">
        <thead>
          <tr>
            <th style="width: 10%; border-left: 1px solid #ddd">ID</th>
            <th style="width: 10%; text-align: center;">Status</th>
            <th @click="sortBy('quantity')" style="cursor: pointer; width: 10%; text-align: center;">
              Quantity
              <span v-if="sortColumn === 'quantity' && sortOrder === 'asc'">▲</span>
              <span v-if="sortColumn === 'quantity' && sortOrder === 'desc'">▼</span>
            </th>
            <th @click="sortBy('product')" style="cursor: pointer; width: 55%; text-align: center;">
              Product name
              <span v-if="sortColumn === 'product' && sortOrder === 'asc'">▲</span>
              <span v-if="sortColumn === 'product' && sortOrder === 'desc'">▼</span>
            </th>
            <th @click="sortBy('total')" style="cursor: pointer; width: 15%; text-align: center;">
              Prices
              <span v-if="sortColumn === 'total' && sortOrder === 'asc'">▲</span>
              <span v-if="sortColumn === 'total' && sortOrder === 'desc'">▼</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id">
            <td style="border-left: 1px solid #ddd">{{ product.id }}</td>
            <td style="text-align: center;"><img src="@/assets/status.svg" alt="Status icon" class="status-icon" /></td>
            <td style="text-align: center;">{{ product.quantity }}</td>
            <td @click="showModal(product)" style="cursor: pointer;">{{ product.product }}</td>
            <td style="text-align: center;">{{ product.total }}</td>
          </tr>
        </tbody>
      </table>
      <ModalComponent 
        :isVisible="isModalVisible" 
        :product="selectedProduct" 
        @close="isModalVisible = false" />
    </div>
  </template>


<script>
import ModalComponent from "@/components/ModalComponent.vue"
import "@/components/ProductTable.scss";

export default {
  components: {
    ModalComponent // Register the component here
  },
  props: {
    products: Array,
    filteredProducts: Array,
    sortColumn: String,
    sortOrder: String
  },
  data() {
    return {
      isModalVisible: false,
      selectedProduct: null
    }
  },
  methods: {
    sortBy(column) {
      this.$emit('sort', column);
    },
    showModal(product) {
      this.selectedProduct = product;
      this.isModalVisible = true;
    },
  }
}
</script>