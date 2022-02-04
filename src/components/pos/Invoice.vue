<template>
	<div>
		<div
			v-if="cart || invoice"
			name="invoice"
			id="invoice-to-print" 
			class="bg-white shadow-md rounded-md hover:shadow-lg max-w-min my-4 mx-auto py-2 px-8 text-left">

			<div class="my-4">
				<p class="font-semibold text-sm text-center">Techminate</p>
				<p class="font-semibold text-sm text-center">Dhaka, Bangladesh</p>
				<p class="font-semibold text-sm text-center mb-2">01680800810</p>
				<p class="text-sm">Date : {{ getMeta.date }}</p>
				<p class="text-sm">Memo : {{ getMeta.invoice_number }}</p>
				<p class="text-sm">Paid with : {{ getMeta.payment_method }}</p>
				<p class="text-sm">Cashier : {{ getMeta.cashier }}</p>
			</div>
			<InvoiceTable :invoice="invoice" :cart="cart" />
		</div>
		<div v-else class="my-4 mx-auto py-16 px-8 text-center">
			The invoice is not available at the moment.
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import InvoiceTable from "@/components/pos/InvoiceTable.vue"
import { Cart } from '@/types/pos/Cart'
import EmptyCheck from '@/mixins/EmptyCheck'


export default defineComponent({
	name: 'Invoice',
	components: { InvoiceTable },
	props: {
		invoice: {
			type: Object as PropType<Cart>,
			required: true
		},
		cart: {
			type: Object as PropType<Cart>,
			required: true
		}
	},
	
})
</script>