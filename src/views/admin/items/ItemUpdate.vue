<template>
	<div>
		<div class="flex flex-nowrap justify-between mb-2 pt-4">
			<h1 class="display-h1">Edit item</h1>
			<div class="text-right">
				<button
					class="base-btn-outline mb-2" 
					@click="$router.go(-1)">
					Back
				</button>
			</div>
		</div>
		<div class="flex flex-nowrap justify-between">
			<div class="w-6/12 h-full card">
				<label class="label flex flex-col py-2" for="name">
					Name
					<input
						class="text-input" 
						type="text" 
						id="name" 
						v-model="item.name" 
						placeholder="Winter Jacket"
					/>
				</label>
				<label class="label flex flex-col py-2" for="price">
					Price
					<input
						class="text-input" 
						type="text" 
						id="price" 
						v-model="item.price" 
						placeholder="15"
					/>
				</label>
				<label class="label flex flex-col py-2" for="discount">
					Discount
					<input
						class="text-input" 
						type="text" 
						id="discount" 
						v-model="item.discount" 
						placeholder="13"
					/>
				</label>
					<label class="label flex flex-col py-2" for="inventory">
						Inventory
						<input
							class="text-input" 
							type="text" 
							id="inventory" 
							v-model="item.inventory" 
							placeholder="3"
						/>
					</label>
				<button 
					class="base-btn float-right"
					v-show="$store.getters.userCan('edit', 'Items')" 
					@click="updateSupplier">
					Save and exit
				</button>
			</div>
			<div class="w-5/12 h-full">
				<div class="card mb-3">
					<label class="label flex flex-col py-2">
						Select Category
						<Multiselect
							v-model="item.category_id"
							:options="getCategoryOptions"
							:searchable="true"
							placeholder="Pick a Category"
						/>
					</label>
					<label class="label flex flex-col py-2">
						Select Brand
						<Multiselect
							v-model="item.brand_id"
							:options="getBrandOptions"
							:searchable="true"
							placeholder="Pick a Brand"
						/>
					</label>
					<label class="label flex flex-col py-2">
						Select Unit
						<Multiselect
							v-model="item.unit_id"
							:options="getUnitOptions"
							:searchable="true"
							placeholder="Pick a Unit"
						/>
					</label>
					<label class="label flex flex-col py-2">
						Select Supplier
						<Multiselect
							v-model="item.unit_id"
							:options="getSupplierOptions"
							:searchable="true"
							placeholder="Pick a Supplier"
						/>
					</label>
				</div>
				<div class="card mb-3">
					<label class="label flex flex-col py-2">
						Available to purchase
						<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
							<input 
								v-model="item.available" 
								type="checkbox" 
								id="availability-toggle toggle"
								class="toggle-checkbox base-toggle-input"
							/>
							<label for="availability-toggle" class="toggle-label base-toggle-label"></label>
						</div>
					</label>
				</div>
				<div class="bg-white rounded-lg shadow-md p-4 mb-3">
					<div class="flex flex-row justify-between">
						<p class="label">Image</p>
						<label class="flex flex-row items-center px-4 py-2 hover:text-blue-800 rounded-lg uppercase cursor-pointer">
							<svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
							</svg>
							<span class="ml-2">Select a file</span>
							<input @change="handleFileChange($event)" type='file' accept="image/*" class="hidden" />
						</label>
					</div>
					<div class="w-48">
						<img :src="item.image" />
					</div>
					<div v-show="newImagePreview.length">
						<p class="uppercase text-sm font-light">Preview</p>
						<img :src="newImagePreview" class="w-48 mb-6" />
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-md p-4">
					<label class="label flex flex-col py-2">
						Select Expire Date
						<input 
							type="date"
							v-model="item.expire_date"
							class="text-input"
						/>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

