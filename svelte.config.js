import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			kit: {
				adapter: adapter({
					pages: 'build',
					assets: 'build',
					fallback: null,
					precompress: false
				}),
				prerender: {
					default: true,
				},
				trailingSlash: 'always',
				paths: {
					base: dev ? '' : '/factors'
				}
			}
		}),
	}
};

export default config;
