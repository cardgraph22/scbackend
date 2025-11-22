<!-- login -->
<script>
  let { form } = $props();

  import userState from "$lib/states/UserState.svelte.js"; //  user logged in
  import { goto } from "$app/navigation";
  import { enhance } from "$app/forms";

  let newuser = $state("");

  const submitAdd = () => {
    return async ({ result, update }) => {
      switch (result.type) {
        case "success":
          userState.username = result.data.username;
          userState.userid = result.data._id;
          break;
        case "failure":
        default:
          break;
      }
      await update();
      //await update({ reset: false }) // use this if i ever want edit field
      if (result.type === "success") {
        goto("/");
      }
    };
  };
  function addUser() {
    if (newuser === "") newuser = "newuser";
    else newuser = "newuser";
    console.log(
      "login page, newuser",
      newuser,
      "typeof newuser",
      typeof newuser,
    );
  }
</script>

<div class="w-96 mx-auto">
  <form
    method="POST"
    action="?/login"
    use:enhance={submitAdd}
    class="flex flex-col justify-start gap-3"
  >
    <label class="label" for="username">Username</label>
    <input
      type="text"
      name="username"
      id="username"
      placeholder="Enter Username"
      value={form?.username ?? ""}
      class="input input-bordered"
    />
    {#if form?.errors?.username}
      <label for="username" class="txtError">{form?.errors?.username[0]}</label>
    {/if}
    <label class="label" for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Enter Password"
      class="input input-bordered"
    />
    {#if form?.errors?.password}
      <label for="password" class="txtError"
        >{form?.errors?.password[0]} class="input input-bordered"
      </label>
      <br />
    {/if}
    <input
      type="hidden"
      name="newuser"
      value={newuser}
      class="input input-bordered"
    />

    <!-- if user not found and 'new user' not checked -->
    {#if form?.error}
      <p>{form?.message}</p>
      <p>Check the 'New User box to add a new user'</p>
    {/if}

    <div class="grid justify-items-start">
      <button class="btn">Login</button>
      <label class="label cursor-pointer">
        <span class="label-text pr-2">New User</span>
        <input type="checkbox" onchange={addUser} class="checkbox" />
      </label>
    </div>
  </form>
</div>
