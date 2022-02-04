<template>
	<div class="bg-white rounded-md shadow-xl m-4 px-4 py-4">
		<div class="flex flex-col py-2">
			<label class="label" for="name">Name:</label>
			<input
				class="text-input" 
				type="text" 
				id="name" 
				v-model="name" 
				placeholder="John Doe"
				/>
		</div>
		<div class="flex flex-col py-2">
			<label class="label" for="email">Email:</label>
			<input
				class="text-input" 
				type="email" 
				id="email" 
				v-model="email" 
				placeholder="mail@example.com"
			/>
		</div>
		<div class="flex flex-col py-2">
			<label class="label" for="phone">Phone:</label>
			<input
				class="text-input" 
				type="tel" 
				id="phone" 
				v-model="phone" 
				placeholder="+33 6 7856 218"
			/>
		</div>
		<div class="flex flex-col py-2">
			<label class="label" for="address">Address:</label>
			<input
				class="text-input" 
				type="text" 
				id="address" 
				v-model="address" 
				placeholder="15 Lonely Road"
			/>
		</div>
		<div class="my-2 text-right">
			<button class="base-btn" @click="addCustomer">Save</button>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import ResponseData from "@/types/ResponseData";

export default defineComponent({
	name: 'CustomerForm',
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			address: ''
		}
	},

})
</script>