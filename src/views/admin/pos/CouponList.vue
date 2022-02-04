<template>
	<div>  
		<div class="flex flex-nowrap justify-between">
			<h1 class="display-h1">Coupon List</h1>
			<router-link :to="{ name: 'CouponCreate' }">
				<button 
					v-show="$store.getters.userCan('create', 'Coupon')"
					class="base-btn">
					Create Coupon
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
			@handleSearch="searchCoupon"
			@handleAddProfile="addCouponProfile"
			@handleView="viewCoupon"
			@handleEdit="editCoupon"
			@handleDelete="showDeleteModal"
			@pageChange="pageChange" 
			@previousPage="previousPage" 
			@nextPage="nextPage" 
			@maxItemsPerPageChange="pageLimitChange" />
		<div class="hidden" :class="isDeleting ? 'active' : ''">
			<DeleteModal @handleConfirmDelete="deleteCoupon" @close-modal="isDeleting = false" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataTable from '@/components/tables/DataTable.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'

import { CouponItem } from '@/types/items/Coupons'
import ResponseData from "@/types/ResponseData";

export default defineComponent({
	name: 'CouponList',
	components: {
		DataTable,
		DeleteModal
	},
	data() {
		return {
			next: '',
			prev: '',
			meta: {},
			data: [] as Array<CouponItem>,
			type: "Users",
			url: '/couponList',
			maxItemsPerPage: '' || undefined as unknown as string,
			isDeleting: false,
			selectedCouponId: 0 as number,
			columns: [
				{
					attribute: 'code',
					name: 'code'
				},
				{
					attribute: 'discount',
					name: 'value (%)'
				},
				{
					attribute: 'start_date',
					name: 'start'
				},
				{
					attribute: 'end_date',
					name: 'end'
				},
				{
					attribute: 'active',
					name: 'is_active'
				}
			]
		}
	},
	
});
</script>