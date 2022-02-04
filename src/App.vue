<template>
  <MinimalLayout />
</template>

<script>
import GuestLayout from '@/components/layouts/GuestLayout.vue'

import POSLayout from '@/components/layouts/POSLayout.vue'
import MinimalLayout from '@/components/layouts/MinimalLayout.vue'

export default {
  name: 'App',
  components: {
    GuestLayout,

    POSLayout,
    MinimalLayout
  },
  
  data() {
    return {
     
    };
  },
  
}
</script>