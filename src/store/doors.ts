import { writable } from "svelte/store";
import { getDatestamp } from "../util/localStorage";

export enum DoorState {
	unvisited = "unvisited",
	speak = "speak",
	callback = "callback",
	close = "close",
	sale = "sale",
}

export interface Door {
	id: string;
	street: string;
	house: string;
	state: DoorState;
	comment: string;
	saleAmount: number | null;
}

const doorsKey = `${getDatestamp(new Date())}-doors`;

export const doorStore = writable<Map<string, Door>>(
	JSON.parse(localStorage.getItem(doorsKey)) || {}
);

doorStore.subscribe((doors) => {
	localStorage.setItem(doorsKey, JSON.stringify(doors));
});
