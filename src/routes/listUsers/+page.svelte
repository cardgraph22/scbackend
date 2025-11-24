<!-- listUsers-->
<script>
  let { data } = $props();
  let users = $state([]);
  if(data){
    let obj = JSON.stringify(data.users)
    users = JSON.parse(obj)
    $inspect('+page, listUsers, users', users)
  }
</script>

{#if users}
<div class="bd">
  <div class="container">
  {#each users as user, idx}

      <!--<div class="item">{user._id}</div>-->
      <div class="grid-item">{user.username}</div>
      <div class="grid-item">{user.email}</div>
      <!--<div class="item">{user._id}</div>-->
      <!--<div class="item">{user.password}</div>-->
      <div class="grid-item">{user.imagename}</div>

      <div class="grid-item">
      <form method="POST">
        <button class="btn flex-1">Delete</button>
        <input type="hidden" name="userid" value={user._id}>
      </form>
      </div>

  {/each}
  </div>
  </div>
{/if}
<style>
.bd {
    display: flex; /* 1. Use Flexbox on the body to center the container */
    justify-content: center; /* 2. Center the container horizontally */
    align-items: center; /* 3. Center the container vertically */
    min-height: 100vh; /* 4. Ensure the body takes up the full screen height */
    margin: 0; /* Remove default body margin */
}

.container {
    display: grid; /* 1. Set the container to a CSS Grid */
    grid-template-columns: repeat(4, 1fr); /* 2. Create 4 equal-width columns*/
    gap: 20px; /* 3. Add space between the items*/
    width: 50%; /* Optional: Adjust the overall width as needed */
    max-width: 1000px; /* Optional: Set a maximum width */
}

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