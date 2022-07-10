<script lang="ts">
	interface RadioButtonItem {
		label: string;
		value: string;
	}
	export let name: string;
	export let defaultValue: string;
	export let items: RadioButtonItem[];
	export let onInput: (value: string) => void;

	// Currently selected value
	let curr: string;

	// Trigger onInput event handler every time
	// the currently selected radio button is changed
	$: curr && onInput(curr);
</script>

<div class="flex flex-col gap-4 text-gray-700">
	{#each items as item}
		<div class="text-sm select-none">
			<input
				type="radio"
				checked={defaultValue === item.value}
				{name}
				id={item.value}
				value={item.value}
				on:input={() => (curr = item.value)}
			/><label for={item.value} class="pl-4">{item.label}</label>
		</div>
	{/each}
</div>
