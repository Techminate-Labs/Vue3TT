<template>
	<div>
		<div class="flex flex-nowrap justify-between mb-2 pt-4">
			<h1 class="display-h1">Update Supplier</h1>
			<div class="text-right">
				<button
					class="base-btn-outline mb-2" 
					@click="$router.go(-1)">
					Back
				</button>
			</div>
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
				<label class="label" for="company-name">Company name:</label>
				<input
					class="text-input" 
					type="text" 
					id="company-name" 
					v-model="companyName" 
					placeholder="ACME Inc."
					/>
			</div>
		</div>
		<button 
			class="base-btn float-right"
			v-show="$store.getters.userCan('edit', 'Items')"
			@click="updateSupplier">
			Save
		</button>
	</div>
</template>

