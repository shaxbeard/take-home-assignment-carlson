<template>
    <div id="page-wrap">     
    <HeaderComponent
      :searchQuery="searchQuery"
      :isMenuVisible="isMenuVisible"
      @update:searchQuery="searchQuery = $event"
      @toggle-menu="toggleMenu"
    />

    
    <!-- Product table -->
    <div class="product-table-container">
      <!-- Display the number of products -->
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
            <!-- <td style="text-align: center;"><img src="@/assets/status.svg" alt="Status icon" class="status-icon" />
            </td> -->
            <td style="text-align: center;">
              <svg width="84" height="28" viewBox="0 0 84 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="0.5" width="82" height="27" rx="11.5" fill="#EDEDFE"/>
                <rect x="1" y="0.5" width="82" height="27" rx="11.5" stroke="black"/>
                <rect x="1" y="0.5" width="82" height="27" rx="11.5" stroke="black" stroke-opacity="0.2"/>
                <path d="M28.4714 18.108C28.0314 18.108 27.6154 18.068 27.2234 17.988C26.8394 17.908 26.4834 17.796 26.1554 17.652C25.8354 17.5 25.5434 17.316 25.2794 17.1L25.6274 16.308C25.8994 16.508 26.1754 16.68 26.4554 16.824C26.7434 16.96 27.0514 17.064 27.3794 17.136C27.7154 17.2 28.0794 17.232 28.4714 17.232C29.1914 17.232 29.7234 17.1 30.0674 16.836C30.4194 16.564 30.5954 16.208 30.5954 15.768C30.5954 15.536 30.5394 15.336 30.4274 15.168C30.3234 15 30.1474 14.856 29.8994 14.736C29.6594 14.616 29.3434 14.516 28.9514 14.436L27.7034 14.184C26.9514 14.024 26.3874 13.764 26.0114 13.404C25.6434 13.036 25.4594 12.548 25.4594 11.94C25.4594 11.436 25.5874 10.996 25.8434 10.62C26.1074 10.244 26.4714 9.952 26.9354 9.744C27.4074 9.536 27.9434 9.432 28.5434 9.432C28.9274 9.432 29.2914 9.472 29.6354 9.552C29.9794 9.632 30.2954 9.752 30.5834 9.912C30.8794 10.064 31.1394 10.252 31.3634 10.476L31.0154 11.244C30.6554 10.916 30.2754 10.68 29.8754 10.536C29.4754 10.384 29.0274 10.308 28.5314 10.308C28.1074 10.308 27.7394 10.372 27.4274 10.5C27.1234 10.628 26.8834 10.816 26.7074 11.064C26.5394 11.304 26.4554 11.584 26.4554 11.904C26.4554 12.288 26.5714 12.592 26.8034 12.816C27.0434 13.04 27.4314 13.204 27.9674 13.308L29.2154 13.572C30.0234 13.74 30.6194 13.996 31.0034 14.34C31.3954 14.676 31.5914 15.136 31.5914 15.72C31.5914 16.184 31.4634 16.6 31.2074 16.968C30.9594 17.328 30.5994 17.608 30.1274 17.808C29.6634 18.008 29.1114 18.108 28.4714 18.108ZM35.3028 18.108C34.6148 18.108 34.0988 17.924 33.7548 17.556C33.4108 17.188 33.2388 16.664 33.2388 15.984V12.924H32.0988V12.168H33.2388V10.38H34.2108V12.168H36.0588V12.924H34.2108V15.888C34.2108 16.344 34.3068 16.692 34.4988 16.932C34.6908 17.164 35.0028 17.28 35.4348 17.28C35.5628 17.28 35.6908 17.264 35.8188 17.232C35.9468 17.2 36.0628 17.168 36.1668 17.136L36.3348 17.88C36.2308 17.936 36.0788 17.988 35.8788 18.036C35.6788 18.084 35.4868 18.108 35.3028 18.108ZM38.9941 18.108C38.5941 18.108 38.2341 18.032 37.9141 17.88C37.6021 17.72 37.3541 17.504 37.1701 17.232C36.9861 16.96 36.8941 16.656 36.8941 16.32C36.8941 15.888 37.0021 15.548 37.2181 15.3C37.4421 15.052 37.8061 14.876 38.3101 14.772C38.8221 14.668 39.5181 14.616 40.3981 14.616H40.9381V15.252H40.4101C39.9221 15.252 39.5141 15.268 39.1861 15.3C38.8581 15.332 38.5981 15.388 38.4061 15.468C38.2141 15.548 38.0781 15.652 37.9981 15.78C37.9181 15.908 37.8781 16.068 37.8781 16.26C37.8781 16.588 37.9901 16.856 38.2141 17.064C38.4461 17.272 38.7581 17.376 39.1501 17.376C39.4701 17.376 39.7501 17.3 39.9901 17.148C40.2381 16.996 40.4301 16.788 40.5661 16.524C40.7101 16.26 40.7821 15.956 40.7821 15.612V14.244C40.7821 13.748 40.6821 13.392 40.4821 13.176C40.2821 12.952 39.9541 12.84 39.4981 12.84C39.1461 12.84 38.8061 12.892 38.4781 12.996C38.1501 13.092 37.8141 13.252 37.4701 13.476L37.1341 12.768C37.3421 12.624 37.5781 12.5 37.8421 12.396C38.1061 12.284 38.3821 12.2 38.6701 12.144C38.9581 12.088 39.2341 12.06 39.4981 12.06C40.0021 12.06 40.4181 12.144 40.7461 12.312C41.0741 12.472 41.3181 12.72 41.4781 13.056C41.6381 13.384 41.7181 13.808 41.7181 14.328V18H40.8061V16.644H40.9141C40.8501 16.948 40.7261 17.208 40.5421 17.424C40.3661 17.64 40.1461 17.808 39.8821 17.928C39.6181 18.048 39.3221 18.108 38.9941 18.108ZM45.8614 18.108C45.1734 18.108 44.6574 17.924 44.3134 17.556C43.9694 17.188 43.7974 16.664 43.7974 15.984V12.924H42.6574V12.168H43.7974V10.38H44.7694V12.168H46.6174V12.924H44.7694V15.888C44.7694 16.344 44.8654 16.692 45.0574 16.932C45.2494 17.164 45.5614 17.28 45.9934 17.28C46.1214 17.28 46.2494 17.264 46.3774 17.232C46.5054 17.2 46.6214 17.168 46.7254 17.136L46.8934 17.88C46.7894 17.936 46.6374 17.988 46.4374 18.036C46.2374 18.084 46.0454 18.108 45.8614 18.108ZM49.7807 18.108C49.3087 18.108 48.9167 18.024 48.6047 17.856C48.3007 17.68 48.0687 17.42 47.9087 17.076C47.7567 16.732 47.6807 16.304 47.6807 15.792V12.168H48.6527V15.78C48.6527 16.124 48.6967 16.412 48.7847 16.644C48.8807 16.868 49.0287 17.036 49.2287 17.148C49.4287 17.252 49.6767 17.304 49.9727 17.304C50.3087 17.304 50.6007 17.228 50.8487 17.076C51.0967 16.924 51.2927 16.712 51.4367 16.44C51.5807 16.168 51.6527 15.848 51.6527 15.48V12.168H52.6247V18H51.6767V16.656H51.8327C51.6727 17.128 51.4087 17.488 51.0407 17.736C50.6807 17.984 50.2607 18.108 49.7807 18.108ZM56.4113 18.108C56.1073 18.108 55.8113 18.076 55.5233 18.012C55.2433 17.956 54.9793 17.876 54.7313 17.772C54.4913 17.66 54.2833 17.528 54.1073 17.376L54.4193 16.692C54.6113 16.844 54.8193 16.972 55.0433 17.076C55.2673 17.172 55.4953 17.244 55.7273 17.292C55.9593 17.34 56.1953 17.364 56.4353 17.364C56.8913 17.364 57.2353 17.28 57.4673 17.112C57.6993 16.944 57.8153 16.716 57.8153 16.428C57.8153 16.204 57.7393 16.028 57.5873 15.9C57.4353 15.764 57.1953 15.66 56.8673 15.588L55.7753 15.348C55.2713 15.244 54.8953 15.064 54.6473 14.808C54.4073 14.552 54.2873 14.22 54.2873 13.812C54.2873 13.452 54.3793 13.144 54.5633 12.888C54.7553 12.624 55.0233 12.42 55.3673 12.276C55.7113 12.132 56.1113 12.06 56.5673 12.06C56.8393 12.06 57.0993 12.088 57.3473 12.144C57.5953 12.2 57.8273 12.284 58.0433 12.396C58.2673 12.5 58.4593 12.632 58.6193 12.792L58.2953 13.476C58.1433 13.332 57.9713 13.212 57.7793 13.116C57.5873 13.012 57.3873 12.936 57.1793 12.888C56.9793 12.832 56.7753 12.804 56.5673 12.804C56.1193 12.804 55.7793 12.892 55.5473 13.068C55.3153 13.244 55.1993 13.476 55.1993 13.764C55.1993 13.988 55.2713 14.172 55.4153 14.316C55.5593 14.46 55.7833 14.564 56.0873 14.628L57.1793 14.856C57.6993 14.968 58.0873 15.148 58.3433 15.396C58.6073 15.636 58.7393 15.964 58.7393 16.38C58.7393 16.732 58.6433 17.04 58.4513 17.304C58.2593 17.56 57.9873 17.76 57.6353 17.904C57.2913 18.04 56.8833 18.108 56.4113 18.108Z" fill="#605DEC"/>
              </svg>
            </td>
            <td style="text-align: center;">{{ product.quantity }}</td>
            <td @click="showModal(product)" style="cursor: pointer"><p>{{ product.product }}</p><p class="serial">{{ product.serial }}</p></td>
            <td style="text-align: right;">${{ product.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
      <!-- Product Detail Component -->
      <ModalComponent 
        :product="selectedProduct"
        :isVisible="isModalVisible"
        @close="isModalVisible = false"
      />
    </div>
  </template>
  
 
  <script>
  import { products } from '../db';
  import ModalComponent from '../components/ModalComponent.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import "@/views/ProductsPage.scss";

  
  export default {
    components: {
      ModalComponent,
      HeaderComponent,
    },
    data() {
      return {
        sortOrder: 'asc',
        sortColumn: 'id',
        products,
        searchQuery: '',
        isModalVisible: false, 
        selectedProduct: null, // Holds the selected product for the modal
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
      showModal(product) {
        this.selectedProduct = product; // Set the selected product for the modal
        this.isModalVisible = true; 
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
  
  






 
  