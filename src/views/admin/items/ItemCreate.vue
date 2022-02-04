<template>
	<div>
		<div class="flex flex-nowrap justify-between mb-2 pt-4">
			<h1 class="display-h1">Add Product</h1>
			<div class="text-right ">
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
						v-model="name" 
						placeholder="Winter Jacket"
					/>
				</label>
				<label class="label flex flex-col py-2" for="price">
					Price
					<input
						class="text-input" 
						type="text" 
						id="price" 
						v-model="price" 
						placeholder="15"
					/>
				</label>
				<label class="label flex flex-col py-2" for="discount">
					Discount
					<input
						class="text-input" 
						type="text" 
						id="discount" 
						v-model="discount" 
						placeholder="13"
					/>
				</label>
				<label class="label flex flex-col py-2" for="inventory">
					Inventory
					<input
						class="text-input" 
						type="text" 
						id="inventory" 
						v-model="inventory" 
						placeholder="3"
					/>
				</label>
				<button 
					class="base-btn float-right"
					v-show="$store.getters.userCan('create', 'Items')"
					@click="addItem">
					Save
				</button>
			</div>
			<div class="w-5/12 h-full">
				<div class="card w-full p-4">
					<label class="label flex flex-col py-2">
						Select Category
						<Multiselect
							v-model="categoryId"
							:options="getCategoryOptions"
							:searchable="true"
							placeholder="Pick a Category"
						/>
					</label>
					<label class="label flex flex-col py-2">
						Select Brand
						<Multiselect
							v-model="brandId"
							:options="getBrandOptions"
							:searchable="true"
							placeholder="Pick a Brand"
						/>
					</label>
					<label class="label flex flex-col py-2">
						Select Unit
						<Multiselect
							v-model="unitId"
							:options="getUnitOptions"
							:searchable="true"
							placeholder="Pick a Unit"
						/>
					</label>
					<label class="label flex flex-col py-2">
						Select Supplier
						<Multiselect
							v-model="supplierId"
							:options="getSupplierOptions"
							:searchable="true"
							placeholder="Pick a Supplier"
						/>
					</label>
				</div>
				<div class="card w-full my-2">
					<label class="label flex flex-col py-2">
						Available to Purchase
						<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
							<input 
								v-model="available" 
								type="checkbox" 
								id="availability-toggle toggle"
								class="toggle-checkbox base-toggle-input"
							/>
							<label for="availability-toggle" class="toggle-label base-toggle-label"></label>
						</div>
					</label>
				</div>
				<div class="bg-white rounded-lg shadow-md p-4 mb-3">
					<label class="label flex flex-col py-2">
						Image
						<input 
							type="file"
							accept="image/*"
							@change="handleFileChange($event)"
							id="image"
							class="text-input"
						/>
					</label>
				</div>
				<div class="bg-white rounded-lg shadow-md p-4">
					<label class="label flex flex-col py-2">
						Expire Date
						<input 
							type="date"
							@change="handleDateChange($event)"
							class="text-input"
							/>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

