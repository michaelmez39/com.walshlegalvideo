import sveltePreprocess from 'svelte-preprocess'

export default {
  vitePlugin: {
    experimental: {
      useVitePreprocess: true
    }
  },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  
  preprocess: sveltePreprocess()
}
