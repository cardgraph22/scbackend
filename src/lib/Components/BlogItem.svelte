<script>
  import Comments from "./Comments.svelte";
  import blogsStore from "$lib/states/BlogsStore.js"; //  all blogs
  import userState from "$lib/states/UserState.svelte.js";
  import { clblogs } from "$lib/states/BlogsState.svelte.js"; //  all blogs

  let { idx, blog } = $props();
  //console.log("-----------");
  //console.log("BlogItem blog", blog);
  let blogItemTop = blog;
  let depth = $state(1);

  //  disable Delete button if user not author
  let disableBtn = $derived(userState.userid === blog.userid ? false : true);
  //let disableBtn = $state(false)

  function delBlog(idx, blog) {
    if (userState.userid != blog.userid) {
      alert("must be author to delete");
      return;
    }
    fetch("?/delblog", { method: "POST", body: JSON.stringify(blog) });
    clblogs.blogsState.splice(idx, 1);
    //$blogsStore = blogs;
    //blogsState.push(blogs);
  }
</script>

<div
  class="w-[calc(100%-1.5rem)] border rounded-xl shadow-sm p-3 m-3 box-border"
>
  <div class="flex justify-between pb-3">
    <h2 class="text-xl">{blog.username}</h2>
    <p class="text-xl">{blog.title}</p>
    <div class="card-actions justify-end">
      <button
        disabled={disableBtn}
        class="btn btn-xs md:btn-sm btn-outline btn-error"
        onclick={() => delBlog(idx, blog)}>Delete</button
      >
    </div>
  </div>
  <hr class="pb-4" />
  <p class="p-4 bg-slate-100 border rounded-lg">{blog.entry}</p>
  <Comments {blog} {blogItemTop} {depth} />
</div>
