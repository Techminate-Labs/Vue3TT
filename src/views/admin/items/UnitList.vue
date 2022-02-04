<template>
	<div>
		<div class="flex flex-nowrap justify-between pt-4">
			<h1 class="display-h1">Unit List</h1>
			<button 
				@click="showUnitCreateModal"
				v-show="$store.getters.userCan('create', 'Items')" 
				class="base-btn mb-2">
				Create Unit
			</button>
		</div>
		<DataTable 
			:columns="columns"
			:data="data"
			:meta="meta"
			:next="next"
			:prev="prev"
			:type="type"
			@handleSearch="searchUnit"
			@handleView="viewUnit"
			@handleEdit="showUnitEditModal"
			@handleDelete="showDeleteModal"
			@pageChange="pageChange" 
			@previousPage="previousPage" 
			@nextPage="nextPage" 
			@maxItemsPerPageChange="pageLimitChange" 
			/>
		<div class="hidden" :class="isCreating ? 'active' : ''">
			<UnitModalCreate @handleSave="createUnit" @close-modal="isCreating = false" />
		</div>
		<div class="hidden" :class="isEditing ? 'active' : ''">
			<UnitModalUpdate :id="selectedUnit.name" @handleSave="editUnit" @close-modal="isEditing = false" />
		</div>
		<div class="hidden" :class="isDeleting ? 'active' : ''">
			<DeleteModal :id="selectedUnit.name" @handleConfirmDelete="deleteUnit" @close-modal="isDeleting = false" />
		</div>
	</div>
</template>

