<!-- listUsers-->
<script>
  let { data } = $props();
  let users = $state([]);
  if(data){
    let obj = JSON.stringify(data.users)
    users = JSON.parse(obj)
    //$inspect('+page, listUsers, users', users)
  }
</script>

{#if users}
<div class="flex justify-center min-h-screen m-0">
  <div class="grid grid-cols-4 content-start gap-3 w-[50p%] max-w-[1000px] items-center">
    <div class="p-0.5 text-gray-900 text-xl text-left">Name</div>
    <div class="p-0.5 text-gray-900 text-xl text-left">Email</div>
    <div class="p-0.5 text-gray-900 text-xl text-left">Image Name</div>
    <div></div>
    <hr class="border-gray-500">
    <hr class="border-gray-500">
    <hr class="border-gray-500">
    <hr class="border-gray-500">
  {#each users as user, idx}

      <!--<div class="item">{user._id}</div>-->
      <div class="p-0.5 text-gray-700 text-left">{user.username}</div>
      <div class="p-0.5 text-gray-700 text-left">{user.email}</div>
      <!--<div class="item">{user._id}</div>-->
      <!--<div class="item">{user.password}</div>-->
      <div class="p-0.5 text-gray-700 text-left">{user.imagename}</div>

      <div class="p-0.5 text-gray-700 text-left">
      <form method="POST">
        <button class="btn btn-sm btn-error btn-outline">Delete</button>
        <input type="hidden" name="userid" value={user._id}>
      </form>
      </div>

  {/each}
  </div>
  </div>
{/if}
<style>

.grid-item {
    padding: 5px;
    color: gray;
    text-align: left;
    border-radius: 5px;
}
</style>
<!--
<style>
  .row {
    display: flex;
  }
  .item {
    flex: 1 1 0;
  }
</style>
-->

<!--
{#if users}
<div class="flex flex-col items-center">
  <div class="overflow-x-auto">
    <table class="table">
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
-->