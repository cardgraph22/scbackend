<!-- listUsers-->
<script>
  let { data } = $props();
  let users = $state([]);
  if(data){
    let obj = JSON.stringify(data.users)
    users = JSON.parse(obj)
    //$inspect('+page, listUsers, users', users)
  }
  let yes = $state(false);
</script>

{#if users}
<div class="flex justify-center min-h-screen m-0">
  <div class="grid grid-cols-4 content-start gap-3 w-[50p%] max-w-[1000px] items-center">
    <div class="p-0.5 text-gray-900 text-xl text-left">Name</div>
    <div class="p-0.5 text-gray-900 text-xl text-left">Email</div>
    <div class="p-0.5 text-gray-900 text-xl text-left">Image Name</div>
    <div>
      <label class="label cursor-pointer">
        <span class="label-text p-0.5 text-gray-900 text-xl text-left">Admin?</span>
        <!--<input type="checkbox" onchange={addUser} class="checkbox" />-->
        <input type="checkbox"bind:checked={yes} class="checkbox"/>
      </label>
    </div>
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
        <button class="btn btn-sm btn-error btn-outline" disabled={!yes}>Delete</button>
        <input type="hidden" name="userid" value={user._id}>
      </form>
      </div>

  {/each}
  </div>
  </div>
{/if}