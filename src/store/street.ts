import { writable } from "svelte/store";
import { getDatestamp } from "../util/localStorage";

const streetKey = `${getDatestamp(new Date())}-street`;

export const streetStore = writable<string>(
	localStorage.getItem(streetKey) || ""
);

streetStore.subscribe((street) => {
	localStorage.setItem(streetKey, street);
});
