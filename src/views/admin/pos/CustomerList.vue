<template>
	<div>
		<div class="flex flex-nowrap justify-between">
			<h1 class="display-h1">Customer List</h1>
			<router-link :to="{ name: 'CustomerCreate' }">
				<button 
					v-show="$store.getters.userCan('create', 'POS')"
					class="base-btn">
					Create Customer
				</button>
			</router-link>
		</div>
		<DataTable
			:columns="columns"
			:next="next"
			:prev="prev"
			:meta="meta"
			:data="data"
			:type="type"
			@handleSearch="searchCustomer"
			@handleAddProfile="addCustomerProfile"
			@handleView="viewCustomer"
			@handleEdit="editCustomer"
			@handleDelete="showDeleteModal"
			@pageChange="pageChange" 
			@previousPage="previousPage" 
			@nextPage="nextPage" 
			@maxItemsPerPageChange="pageLimitChange" 
			/>
		<div class="hidden" :class="isDeleting ? 'active' : ''">
			<DeleteModal @handleConfirmDelete="deleteCustomer" @close-modal="isDeleting = false" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataTable from '@/components/tables/DataTable.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'

import { CustomerItem } from '@/types/pos/Customers'
import ResponseData from "@/types/ResponseData";

export default defineComponent({
	name: 'CustomerList',
	components: {
		DataTable,
		DeleteModal
	},
	data() {
		return {
			next: '',
			prev: '',
			meta: {},
			data: [] as Array<CustomerItem>,
			type: "Users",
			url: '/customerList',
			maxItemsPerPage: '' || undefined as unknown as string,
			isDeleting: false,
			selectedCustomerId: 0 as number,
			columns: [
				{
					attribute: 'name',
					name: 'name'
				},
				{
					attribute: 'phone',
					name: 'phone'
				},
				{
					attribute: 'email',
					name: 'email'
				},
				{
					attribute: 'address',
					name: 'address'
				},
				{
					attribute: 'point',
					name: 'point'
				}
			]
		}
	},
	
});
</script>