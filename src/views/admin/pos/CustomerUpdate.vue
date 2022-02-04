<template>
	<div>
		<div class="flex flex-nowrap justify-between">
			<h1 class="display-h1">Update Customer</h1>
		</div>
		<div class="bg-white p-4 rounded-lg shadow-md">
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
					type="phone" 
					id="phone" 
					v-model="phone" 
					placeholder="+33 6 7856 218"
					/>
			</div>
			<div class="flex flex-col py-2">
				<label class="label" for="address-name">Address:</label>
				<input
					class="text-input" 
					type="text" 
					id="address" 
					v-model="address" 
					placeholder="15 Lonely Road"
					/>
			</div>
		</div>
		<button 
			class="base-btn float-right" 
			v-show="$store.getters.userCan('edit', 'POS')"
			@click="updateCustomer">
			Save and Exit
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ResponseData from "@/types/ResponseData";

export default defineComponent({
	name: 'CustomerCreate',
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			address: '',
			id: ''
		}
	},
	
});
</script>