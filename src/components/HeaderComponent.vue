<template>
    <header>
          <div class="header-box-1">
            <img src="@/assets/logo.svg" alt="Logo" class="logo" />
            <img src="@/assets/menu.svg" alt="Menu icon" class="menu-button" @click="toggleMenu" />
          </div>
          <div class="header-box-2">
            <div class="search-container">
              <div class="input-wrapper">
                <img src="@/assets/search.svg" alt="Search icon" class="search-icon" />
                <input
                  type="text"
                  v-model="localSearchQuery"
                  placeholder="Search"
                  class="search-bar"
                  @keyup.enter="submitSearch"
                />
              </div>
            </div>
            <button @click="submitSearch" class="search-button">Search</button>

            <nav class="mobile-menu">
                <ul>
                  <li><img src="@/assets/gear.svg" alt="Gear icon" class="menu-icon" /></li>
                  <li><img src="@/assets/bell.svg" alt="Notifications icon" class="menu-icon" /></li>
                  <li><img src="@/assets/user.svg" alt="User icon" class="menu-icon" /></li>
                </ul>    
            </nav>


            <div class="icon-group">
              <img src="@/assets/gear.svg" alt="Gear icon" class="menu-icon" />
              <img src="@/assets/bell.svg" alt="Notifications icon" class="menu-icon" />
              <img src="@/assets/user.svg" alt="User icon" class="menu-icon" />
            </div>
          </div>
        </header>
  </template>
  
<script>
  import "@/components/HeaderComponent.scss";

  export default {
  props: {
    searchQuery: {
      type: String,
      required: true
    },
    isMenuVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      localSearchQuery: this.searchQuery 
    };
  },
  methods: {
    toggleMenu() {
      // this.$emit('toggle-menu');
      const bar = document.querySelector('.bar');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (bar) {
        bar.classList.toggle('animate');
      }
      
      if (mobileMenu) {
        mobileMenu.classList.toggle('active');
      }
      
      return false;
    },
    submitSearch() {
      // Emit the search query only when the user clicks the button
      this.$emit('update:searchQuery', this.localSearchQuery);
    }
  },
  watch: {
    // Sync the prop with the local search query
    searchQuery(newVal) {
      this.localSearchQuery = newVal;
    }
  }
};

</script>