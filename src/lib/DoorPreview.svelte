<script lang="ts">
	import { router } from "tinro";
	import type { Door } from "../store/doors";

	export let door: Door;

	export let from: string | undefined;
	let selected: Boolean = from && from === door.id;

	let parentEl: HTMLDivElement;
	$: {
		const isSelected = from && from === door.id;
		if (parentEl && isSelected) {
			parentEl.scrollIntoView();
			parentEl.focus();
		}
	}
</script>

<div
	bind:this={parentEl}
	tabindex="-1"
	class="flex bg-neutral-100 select-none cursor-pointer"
	class:bg-neutral-200={selected}
	class:opacity-20={["speak", "close", "sale"].includes(door.state)}
	on:blur={() => (selected = false)}
	on:focus={() => (selected = true)}
	on:dblclick={() => router.goto(door.id)}
>
	<div
		class="w-16 aspect-square bg-neutral-700 grid place-items-center text-white text-xs"
		class:bg-red-700={door.state === "callback"}
		class:bg-blue-700={door.state === "close"}
		class:bg-green-700={door.state === "sale"}
	/>
	<div class=" p-4 flex flex-col justify-center text-neutral-800 ">
		<p class="font-bold">
			{door.house}
		</p>
		<p class="text-sm">
			{door.street}
		</p>
	</div>
</div>
