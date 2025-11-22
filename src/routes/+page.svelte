<script>
    import { onMount } from "svelte";

  //let { data } = $props();
  //console.log('data', data)

  let mydata = null;
  let loading = true;
  onMount(async()=>{
    const res = await fetch('https://dummyjson.com/products/?limit=10')
    //const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //console.log('res', res)
    if(!res.ok){
      throw new Error('Network Error');
    }
    mydata = await res.json()
    //console.log('mydata', JSON.stringify(mydata))
    loading = false;

  })
</script>

<!--
<style>
  img {
    width: 100px;
    object-fit: contain;
  }
</style>
-->

<h1>Svelte Club excersize 2</h1>

{#if loading}
  <p>Loading...</p>
{:else}
  <div class="flex flex-wrap gap-3">
    {#each mydata.products as prod}
      <div class="flex flex-col">
        <div class="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={prod.thumbnail} alt="pic">
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {prod.title}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}

<!-- The 'data' prop from load can contain promises during client-side navigation -->
<!--
{#await data}
  <p>Loading specific data for this section...</p>
{:then apiData}
  <p>Data loaded: {JSON.stringify(apiData)}</p>
{:catch error}
  <p>Error: {error.message}</p>
{/await}
-->