<script lang="ts">
	import { router } from "tinro";
	import DoorList from "./DoorList.svelte";
	import { Door, DoorState, doorStore } from "../store/doors";
	import ColorLegend from "./ColorLegend.svelte";
	import { v4 as uuidv4 } from "uuid";
	import Statistics from "./Statistics.svelte";

	export let from: string;

	router.mode.memory();

	// Create a new door with default settings
	const newDoor = () => {
		const door: Door = {
			id: uuidv4(),
			street: "",
			house: "",
			state: DoorState.unvisited,
			comment: "",
			saleAmount: null,
		};

		doorStore.update((doors) => ({ ...doors, [door.id]: door }));

		router.goto(door.id);
	};
</script>

<div class="flex flex-col gap-8 text-gray-900">
	<h1 class="font-bold">Today</h1>

	<ColorLegend />

	<DoorList {from} />

	<button
		class="bg-neutral-900 text-white rounded p-4 select-none"
		on:click={() => newDoor()}
	>
		New door
	</button>

	<Statistics />
</div>
