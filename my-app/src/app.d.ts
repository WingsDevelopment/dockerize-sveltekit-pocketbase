import type PocketBase from 'pocketbase';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pocketbase: PocketBase;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
