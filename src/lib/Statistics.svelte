<script lang="ts">
	import { doorStore } from "../store/doors";

	$: doorCount = Object.values($doorStore).length;
	$: speakCount = Object.values($doorStore).filter(
		(d) => d.state !== "unvisited"
	).length;
	$: closeCount = Object.values($doorStore).filter((d) =>
		["close", "sale"].includes(d.state)
	).length;
	$: salesCount = Object.values($doorStore).filter(
		(d) => d.state === "sale"
	).length;

	const formatStatistic = (word: string, count: number) => {
		const singular = count === 1;
		return `${count} ${word}${singular ? "" : "s"}`;
	};
</script>

<p class="text-gray-600 text-sm">
	<span>{formatStatistic("Door", doorCount)}, </span>
	<span>
		{formatStatistic("Speak", speakCount)},
	</span>
	<span>
		{formatStatistic("Close", closeCount)},
	</span>
	<span>
		{formatStatistic("Sale", salesCount)}
	</span>
</p>
