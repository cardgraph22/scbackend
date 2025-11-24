<!-- listUsers-->
<script>
  let { data } = $props();
  let users = $state([]);
  if(data){
    let obj = JSON.stringify(data.users)
    users = JSON.parse(obj)
  }
</script>

{#if users}
<div class="flex flex-col items-center">
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>User Name</th>
          <th>Email</th>
          <th>Image Name</th>
        </tr>
      </thead>
      <tbody>
        {#each users as user, idx}
        <tr>
          <th>{idx+1}</th>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.imagename}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
{/if}