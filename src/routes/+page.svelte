<script>
  let { data } = $props();
    let { products } = data
</script>

<h1>Svelte Club excersize 2</h1>

  <div class="flex flex-wrap gap-3">
    {#each products as prod}
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