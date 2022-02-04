<template>
	<div class="rounded-md bg-white">
		<div class="px-6 py-4 shadow text-center">
			<div class="max-w-xl mx-auto">
				<h1 class="display-h1">We Accept TNBC</h1>
				<qrcode-vue :value="publicKeyObject" level="H" class="mx-auto mb-4" />
				<p class="mb-4">Public key: {{ publicKey }}</p>
				<p class="mb-4">To Pay: {{ total }}</p>
				<p class="mb-4">Memo: {{ getInvoiceNumber }}</p>
			</div>
		</div>  
		<div class="w-full bg-gray-200">
			<div class="text-center max-w-xl mx-auto py-4">
				<p class="mb-2 text-lg font-semibold">
					<span class="text-xl font-bold">Step 1 :</span>
					Use TNBC Wallet
				</p>
				<p class="mb-2 text-lg font-semibold">
					<span class="text-xl font-bold">Step 2 :</span>
					Scan the QR Code
				</p>
				<p class="mb-2 text-lg font-semibold">
					<span class="text-xl font-bold">Step 3 :</span>
					Complete Payment
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ConfigurationService from "@/services/ConfigurationService"


export default defineComponent({
	name: 'GeneratedQrCode',
	components: { },
	data(){
		return {
			publicKey: '',
			publicKeyObject: '',
			total: 0,
			memo: ''
		}
	},
	methods: {
		async fetchConfigurations(): Promise<any> {
            let token = this.$store.state.session.bearerToken
            await ConfigurationService.list(token)
                .then((res) => {
					this.publicKey = res.data.tnbc_pk 
					const publicKey = { "address": res.data.tnbc_pk }
                    this.publicKeyObject = JSON.stringify(publicKey) 
                })
                .catch(e => {
                    console.log(e)
                })
        },
	},
	computed: {
		getInvoiceNumber(): string {
			return this.$store.state.pos.cart.invoice_number
		}
	},
	mounted(){
		this.fetchConfigurations()
		
	}
})
</script>

<style>

</style>