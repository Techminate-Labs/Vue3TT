<template>
    <div class="flex flex-col">
        <div class="grid grid-cols-2 gap-2">
            <div class="bg-white shadow px-6 py-4 rounded-md mb-2">
                <p>Last transaction amount: {{ configurations.lastTransactionAmount }}</p>
            </div>
            <div class="bg-white shadow px-6 py-4 rounded-md mb-2">
                <p>Last transaction memo: {{ configurations.lastTransactionMemo }}</p>
            </div>
        </div>
        <div class="bg-white shadow px-6 py-4 rounded-md mb-2">
            <p>Store TNBC Public Key: {{ configurations.storePK }}</p>
        </div>
        <div class="bg-white shadow px-6 py-4 rounded-md mb-2">
            <p>Last transaction Public Key: {{ configurations.lastSenderPK }}</p>
        </div>
        <TransactionTable
            class="mt-6"
            :columns="columns"
            :data="transactions"
            />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import TransactionTable from "@/components/tables/TransactionTable.vue"

export default defineComponent({
    name: 'TransactionExplorer',
    components: { TransactionTable },
    data() {
        return {
            transactions: [] as Array<any>,
            configurations: {},
            columns: [
				{
					attribute: 'date',
					name: 'date'
				},
				{
					attribute: 'sender',
					name: 'sender'
				},
				{
					attribute: 'amount',
					name: 'amount'
				},
				{
					attribute: 'memo',
					name: 'memo'
				}
			]
        }
    },
   
});
</script>