<div class="flex flex-col gap-4">
	<h2 class="text-gray-900">Legend</h2>
	<div class="flex flex-col gap-2 text-sm text-gray-600">
		<div class="item">
			<div class="color bg-neutral-700" />
			<p>Unvisited</p>
		</div>
		<div class="item">
			<div class="color bg-neutral-700 opacity-20" />
			<p>Speak</p>
		</div>
		<div class="item">
			<div class="color bg-red-700" />
			<p>Callback</p>
		</div>
		<div class="item">
			<div class="color bg-blue-700 opacity-20" />
			<p>Close</p>
		</div>
		<div class="item">
			<div class="color bg-green-700 opacity-20" />
			<p>Sale</p>
		</div>
	</div>
</div>

<style>
	.item {
		@apply flex gap-2 items-center;
	}

	.color {
		@apply w-4 aspect-square;
	}
</style>
