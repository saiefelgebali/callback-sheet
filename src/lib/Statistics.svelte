<script>
	import { doorStore } from "../store/doors";
</script>

<p class="text-gray-600 text-sm">
	<span>{Object.values($doorStore).length} Doors, </span>
	<span>
		{Object.values($doorStore).filter((d) => d.state !== "unvisited")
			.length} Speaks,
	</span>
	<span>
		{Object.values($doorStore).filter((d) =>
			["close", "sale"].includes(d.state)
		).length} Closes,
	</span>
	<span>
		{Object.values($doorStore).filter((d) => d.state === "sale").length}
		Sales
	</span>
</p>
