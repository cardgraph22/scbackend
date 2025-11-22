<script>
	import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
	import userState from "$lib/states/UserState.svelte.js"; //  the user logged in
  import Navbar from '$lib/Components/Navbar.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar/>
<span>User: </span>
{#if !userState.username}
  <span>'No one logged in'</span>
{:else}
  <span>{userState.username}</span>
{/if}

{@render children()}
