<template>
	<div>
		<div class="flex flex-nowrap justify-between pt-4">
			<h1 class="display-h1">Brand List</h1>
			<button
				@click="showBrandCreateModal"
				v-show="$store.getters.userCan('create', 'Items')"
				class="base-btn mb-2">
				Create Brand
			</button>
		</div>
		<DataTable 
			:columns="columns"
			:data="data"
			:meta="meta"
			:next="next"
			:prev="prev"
			:type="type"
			@handleSearch="searchBrand"
			@handleView="viewBrand"
			@handleEdit="showBrandEditModal"
			@handleDelete="showDeleteModal"
			@pageChange="pageChange" 
			@previousPage="previousPage" 
			@nextPage="nextPage"
			@maxItemsPerPageChange="pageLimitChange" 
			/>
		<div class="hidden" :class="isCreating ? 'active' : ''">
			<BrandModalCreate @handleSave="createBrand" @close-modal="isCreating = false" />
		</div>
		<div class="hidden" :class="isEditing ? 'active' : ''">
			<BrandModalUpdate :id="selectedBrand.name" @handleSave="editBrand" @close-modal="isEditing = false" />
		</div>
		<div class="hidden" :class="isDeleting ? 'active' : ''">
			<DeleteModal @handleConfirmDelete="deleteBrand" @close-modal="isDeleting = false" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataTable from '@/components/tables/DataTable.vue'
import BrandModalCreate from '@/components/modals/BrandModalCreate.vue'
import BrandModalUpdate from '@/components/modals/BrandModalUpdate.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'

import ResponseData from "@/types/ResponseData";
import { Brand } from "@/types/items/Brands";

export default defineComponent({
	name: 'BrandList',
	components: {
		DataTable,
		BrandModalCreate,
		BrandModalUpdate,
		DeleteModal
	},
	data() {
		return {
			items: [],
			next: '',
			prev: '',
			meta: {},
			data: [],
			url: '/brandList',
			maxItemsPerPage: '' || undefined as unknown as string,
			type: 'Users',
			isCreating: false,
			isEditing: false,
			isDeleting: false,
			selectedBrand: { created_at: '', id: 0, name: '', slug: '', updated_at: '' } as Brand,
			selectedBrandId: 0 as number,
			columns: [
				{
					attribute: 'name',
					name: 'name'
				},
				{
					attribute: 'slug',
					name: 'slug'
				},
				{
					attribute: 'item_count',
					name: 'number of products'
				}
			]
		}
	},
	
});
</script>