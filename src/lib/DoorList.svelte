<script lang="ts">
	import { doorStore } from "../store/doors";
	import DoorPreview from "./DoorPreview.svelte";

	export let from: string | undefined;
</script>

<div class="flex flex-col gap-4">
	{#each Object.values($doorStore) as door}
		<DoorPreview {door} {from} />
	{/each}
</div>
