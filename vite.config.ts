import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		port: 8080,
		strictPort: true,
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
