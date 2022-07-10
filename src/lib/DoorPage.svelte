<script lang="ts">
	import { router } from "tinro";
	import { Door, DoorState, doorStore } from "../store/doors";
	import { streetStore } from "../store/street";
	import RadioButtonGroup from "./RadioButtonGroup.svelte";

	export let id: string;

	let door: Door;
	doorStore.subscribe((doors) => (door = doors[id]));

	// Default the door's street to the currentStreet saved in memory
	door.street =
		door.street === "" ? (door.street = $streetStore) : door.street;

	$: {
		// Update current street
		if (door.street !== $streetStore) {
			streetStore.set(door.street);
		}
		// Update this door in memory
		doorStore.update((prev) => ({ ...prev, [door.id]: door }));
	}

	// Autofocus on house input element if house not defined
	function autoFocus(el: HTMLInputElement) {
		if (door.house === "") {
			el.focus();
		}
	}

	// Change the doors state
	function handleDoorState(val: string) {
		switch (val) {
			case "unvisited":
				door.state = DoorState.unvisited;
				break;
			case "speak":
				door.state = DoorState.speak;
				break;
			case "callback":
				door.state = DoorState.callback;
				break;
			case "close":
				door.state = DoorState.close;
				break;
			case "sale":
				door.state = DoorState.sale;
				break;
			default:
				door.state = null;
				break;
		}
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		router.goto("/");
	}

	function handleRemoveDoor() {
		router.goto("/");
		doorStore.update((prev) => {
			delete prev[door.id];
			return prev;
		});
	}
</script>

<div class="flex flex-col gap-8 text-gray-900">
	<div class="flex justify-between">
		<h1 class="font-bold">
			{#if door.house !== "" && door.street !== ""}
				{door.house}, {door.street}
			{:else}
				New door
			{/if}
		</h1>
		<button class="text-sm text-red-700" on:click={handleRemoveDoor}>
			Remove
		</button>
	</div>

	<form on:submit={handleSubmit} class="flex flex-col gap-4">
		<div class="input-group">
			<label for="street">Street</label>
			<input
				id="street"
				class="w-full"
				type="text"
				autocomplete="off"
				bind:value={door.street}
			/>
		</div>

		<div class="input-group">
			<label for="house">House</label>
			<input
				id="house"
				class="w-full"
				type="text"
				autocomplete="off"
				use:autoFocus
				bind:value={door.house}
			/>
		</div>

		<div class="input-group">
			<label for="house" class="mb-4">Door State</label>
			<RadioButtonGroup
				defaultValue={door.state}
				onInput={handleDoorState}
				name="door_state"
				items={[
					{ label: "Unvisited", value: DoorState.unvisited },
					{ label: "Speak", value: DoorState.speak },
					{ label: "Callback", value: DoorState.callback },
					{ label: "Close", value: DoorState.close },
					{ label: "Sale", value: DoorState.sale },
				]}
			/>
		</div>

		<div class="flex flex-col gap-4 mt-4">
			<button class="bg-neutral-900 text-white rounded p-4 select-none">
				Done
			</button>
		</div>
	</form>
</div>

<style>
	.input-group {
		@apply text-gray-900;
	}

	.input-group > label {
		@apply block;
	}

	.input-group > input {
		@apply border px-4 py-2 rounded;
	}
</style>
