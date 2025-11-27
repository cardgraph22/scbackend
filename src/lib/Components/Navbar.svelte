{#snippet mnu()}
  <a href="/"><button class="btn btn-primary btn-outline">Home</button></a>
  <a href="/login"><button class="btn btn-primary btn-outline">Login</button></a>
  <a href="/listUsers"><button class="btn btn-primary btn-outline">List Users</button></a>
  <a href="/readme"><button class="btn btn-primary btn-outline">Read Me</button></a>
{/snippet}
<ul class="flex gap-1">
  {@render mnu()}
</ul>
