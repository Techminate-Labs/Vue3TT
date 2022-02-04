<template>
	<div class="mt-6">
		<div class="flex flex-nowrap justify-between pt-4">
			<h1 class="display-h1">Barcodes</h1>
			<button
				@click="printBarcodes"
				class="base-btn mb-2">
				Print
			</button>
		</div>
		<h2 class="display-h2">Inventory: {{ iteration }}</h2>
		<h2 class="display-h2">Product: {{ item.name }}</h2>
		<ul id="barcodes" class="flex flex-wrap my-2">
			<li v-for="(index) in iteration" :key="index">
				<Barcode />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Barcode from '@/components/Barcode.vue'


export default defineComponent({
	name: 'BarcodeList',
	components: { Barcode },
	data (){
		return {
			iteration: Number(this.$route.params.inventory),
			item: {}
		}
	},
	
})
</script>

<style scoped>

@media print {
	body {
		display: none;
		opacity: 0;
	}
  	
  	#barcodes {
		  display: flex;
		  opacity: 100;
 	}
}

</style>