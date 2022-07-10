<script lang="ts">
	import "./app.css";
	import { Route, router } from "tinro";
	import DoorPage from "./lib/DoorPage.svelte";
	import HomePage from "./lib/HomePage.svelte";

	router.mode.memory();
</script>

<div id="app" class="min-h-screen">
	<main class="w-full max-w-2xl mx-auto px-4 py-16">
		<Route path="/" let:meta>
			<HomePage from={meta.from} />
		</Route>

		<Route path="/:doorId" let:meta>
			<DoorPage id={meta.params.doorId} />
		</Route>
	</main>
</div>
