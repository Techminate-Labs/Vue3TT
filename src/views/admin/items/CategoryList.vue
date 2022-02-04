<template>
	<div>
		<div class="flex flex-nowrap justify-between pt-4">
			<h1 class="display-h1">Category List</h1>
			<button
				@click="showCategoryCreateModal"
				v-show="$store.getters.userCan('create', 'Items')"
				class="base-btn mb-2">
				Create Category
			</button>
		</div>
		<DataTable 
			:columns="columns"
			:data="data"
			:meta="meta"
			:next="next"
			:prev="prev"
			:type="type"
			@handleSearch="searchCategory"
			@handleView="viewCategory"
			@handleEdit="showCategoryEditModal"
			@handleDelete="showDeleteModal"
			@pageChange="pageChange"
			@previousPage="previousPage" 
			@nextPage="nextPage" 
			@maxItemsPerPageChange="pageLimitChange" 
			/>
		<div class="hidden" :class="isCreating ? 'active' : ''">
			<CategoryModalCreate @handleSave="createCategory" @close-modal="isCreating = false" />
		</div>
		<div class="hidden" :class="isEditing ? 'active' : ''">
			<CategoryModalUpdate :id="selectedCategory.name" @handleSave="editCategory" @close-modal="isEditing = false" />
		</div>
		<div class="hidden" :class="isDeleting ? 'active' : ''">
			<DeleteModal @handleConfirmDelete="deleteCategory" @close-modal="isDeleting = false" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DataTable from '@/components/tables/DataTable.vue';
import CategoryModalCreate from '@/components/modals/CategoryModalCreate.vue';
import CategoryModalUpdate from '@/components/modals/CategoryModalUpdate.vue';
import DeleteModal from '@/components/modals/DeleteModal.vue';
import ResponseData from "@/types/ResponseData";
import { Category } from "@/types/items/Categories";

export default defineComponent({
	name: 'CategoryList',
	components: {
		DataTable,
		CategoryModalCreate,
		CategoryModalUpdate,
		DeleteModal
	},
	data() {
		return {
			next: '',
			prev: '',
			meta: {},
			data: [],
			url: '/categoryList',
			maxItemsPerPage: '' || undefined as unknown as string,
			type: 'Users',
			isCreating: false,
			isEditing: false,
			isDeleting: false,
			selectedCategory: { created_at: '', id: 0, name: '', slug: '', updated_at: '' } as Category,
			selectedCategoryId: 0 as number,
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