<template>
    <div id="page-wrap">     
      <HeaderComponent
        :searchQuery="searchQuery"
        :isMenuVisible="isMenuVisible"
        @update:searchQuery="searchQuery = $event"
        @toggle-menu="toggleMenu"
      />

      <ProductTable
        :products="products"
        :filteredProducts="filteredProducts"
        :sort-column="sortColumn"
        :sort-order="sortOrder"
        @sort="sortBy"
      />
    </div>
  </template>
  
 
  <script>
  import { products } from '../db';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import ProductTable from '@/components/ProductTable.vue';
  import "@/views/ProductsPage.scss";
 
  
  export default {
    components: {
      HeaderComponent,
      ProductTable,
    },
    data() {
      return {
        sortOrder: 'asc',
        sortColumn: 'id',
        products,
        searchQuery: '',
        isModalVisible: false, 
        selectedProduct: null,
        isMenuVisible: false, 
      };
    },
    computed: {
      sortedProducts() {
        return this.products.slice().sort((a, b) => {
          let modifier = this.sortOrder === 'asc' ? 1 : -1;
  
          if (this.sortColumn === 'id') {
            return a.id - b.id; 
          } else if (this.sortColumn === 'total' || this.sortColumn === 'quantity') {
            return (a[this.sortColumn] - b[this.sortColumn]) * modifier;
          } else if (this.sortColumn === 'product') {
            return a.product.localeCompare(b.product) * modifier;
          }
        });
      },
      filteredProducts() {
        if (this.searchQuery) {
          return this.sortedProducts.filter(product =>
            product.product.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        return this.sortedProducts;
      }
    },
    methods: {
      sortBy(column) {
        if (['product', 'total', 'quantity'].includes(column)) {
          if (this.sortColumn === column) {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
          } else {
            this.sortColumn = column;
            this.sortOrder = 'asc';
          }
        }
      },
      toggleMenu() {
        this.isMenuVisible = !this.isMenuVisible; 
      }
    },
    mounted() {
      this.sortColumn = 'id';
      this.sortOrder = 'asc';
    }
  };
  </script>
  
  






 
  