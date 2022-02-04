<template>
	<div>
		<div class="flex flex-nowrap justify-between pt-4">
			<h1 class="display-h1">Items List</h1>
			<router-link :to="{ name: 'ItemCreate' }">
				<button
					v-show="$store.getters.userCan('create', 'Items')"
					class="base-btn mb-2">
					Create Item
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
			@handleSearch="searchItem"
			@handleView="viewItem"
			@handleEdit="editItem"
			@handleDelete="showDeleteModal"
			@pageChange="pageChange" 
			@previousPage="previousPage" 
			@nextPage="nextPage" 
			@maxItemsPerPageChange="pageLimitChange" 
			/>
		<div class="hidden" :class="isDeleting ? 'active' : ''">
			<DeleteModal @handleConfirmDelete="deleteItem" @close-modal="isDeleting = false" />
		</div>
	</div>
</template>

