import { type Load, redirect } from '@sveltejs/kit';

export const load: Load = async () => {
	const host = import.meta.env.VITE_HOST;
	redirect(301, `${host}`);
}
