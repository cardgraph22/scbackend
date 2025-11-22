<script>
  //import { enhance, applyAction } from '$app/forms';
  import Comments from "$lib/Components/Comments.svelte";
  let { blog, blogItemTop, depth } = $props();
  import userState from "$lib/states/UserState.svelte.js"; //  the user logged in (if any)

  //let indent = "30px";
  //  reduce indent for successive nested replies
  let indent = 30 / depth + "px";
  //console.log('Comments, depth', depth)
  //console.log('Comments, indent', indent)
  depth++;
  let likes = $state(0);
  let entry = $state();

  //  The following just controls the text in the Show/Hide buttons
  //  ie, Comment(s) vs Reply(s) (only a comment has a title)
  //                                  truthy       falsy
  let msg  = $derived(blog.title ? "Comment" : "Comments");
  let msgs = $derived(blog.title ? "Reply" : "Replies");

  let showReply   = $state(true);
  let showReplies = $state(false);

  //  disable comment button if no user logged in
  //let disableBtn = $derived($userState.username ? false : true)
  let disableBtn = $state(false);

  function addReply() {
    let reply = {
      //"replyid": crypto.randomUUID(),
      userid: userState.userid,
      username: userState.username,
      title: "phony title",
      entry: entry,
      likes: 0,
      dislikes: 0,
      replies: [],
    };

    blog.replies.push(reply);
    fetch("/replies?/addReply", {
      method: "POST",
      body: JSON.stringify({
        entry,
        blogItemTop: JSON.stringify(blogItemTop),
      }),
    })
      //.then(response => console.log(response.message))
      .then((response) => {
        //console.log('client, addReply response', response)
      });
    showReply = true;
  }

  function delReply(idx) {
    blog.replies[idx].length = 0;
    blog.replies.splice(idx, 1);
    //  nukes entry at idx - no user needed - user reply already deleted
    fetch("/replies?/delReply", {
      method: "POST",
      body: JSON.stringify(blogItemTop),
    });
    showReply = true;
  }
</script>

<div class="p-4">
  <button
    id="thumbsUpButton"
    class="btn btn-sm btn-outline btn-primary"
    onclick={() => {
      likes++;
    }}
  >
    <img src="/thumbs-up.png" id="thumbsUpImg" alt="thumbs" />
  </button>
  <span id="likes">{likes}</span>
  <!-- Hide/Show Comment(s) -->
  <button
    disabled={disableBtn}
    class="btn btn-sm btn-outline btn-primary"
    onclick={() => (showReply = !showReply)}>{msg}</button
  >

  <div class:reply={showReply} class="replyBox p-4">
    <!--  Add a Comment (first level) or reply (subsequent levels) -->
    <form method="POST" action="replies?/addReply">
      <input type="hidden" name="username" value={userState.username} />
      <input type="hidden" name="userid" value={userState.userid} />
      <input type="hidden" name="title" value="phony title" />
      <!--<textarea rows="6" name="entry" placeholder={msg} bind:value={entry}></textarea>-->
      <textarea
        name="entry"
        rows="6"
        placeholder={msg}
        bind:value={entry}
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      ></textarea>
      <!--<button class="btn btnAdd">Add</button>-->
      <button
        class="btn btn-sm btn-outline btn-primary"
        type="button"
        onclick={addReply}>Add</button
      >
      <button
        class="btn btn-sm btn-outline btn-primary"
        type="button"
        onclick={() => (showReply = !showReply)}>Cancel</button
      >
    </form>
  </div>
  {#if blog.replies.length > 0}
    <!-- Hide/Show Reply(s) -->
    <button
      class="btn btn-sm btn-outline btn-primary"
      onclick={() => (showReplies = !showReplies)}
    >
      {showReplies ? "Hide" : "Show"}
      {msgs}
      {blog.replies.length}
    </button>
  {:else}
    <button class="btn btn-sm btn-outline btn-primary" disabled
      >Show {msgs} {blog.replies.length}</button
    >
  {/if}
</div>

{#if blog.replies && showReplies}
  {#each blog.replies as blog, idx}
    <div class="replyBox p-4" style="margin-left: {indent};">
      <p class="userName">{blog.username}</p>
      <div class="entry flex justify-between bg-slate-50 p-4 border rounded-xl">
        <p id="replyEntry">{blog.entry}</p>
        {#if userState.userid === blog.userid}
          <button
            class="btn btn-sm btn-outline btn-primary"
            type="button"
            onclick={() => {
              delReply(idx);
            }}>Delete</button
          >
        {:else}
          <button
            disabled
            class="btn btn-sm btn-outline btn-primary"
            type="button"
            onclick={() => {
              delReply(idx);
            }}>Delete</button
          >
        {/if}
      </div>
      <Comments {blog} {blogItemTop} {depth} />
    </div>
  {/each}
{/if}

<style>
  #likes {
    color: green;
    margin-right: 0.5rem;
  }
  .reply {
    display: none;
  }
  .replyBox {
    position: relative;
    margin-bottom: 10px;
    border-left: 1px solid #aaa;
  }

  /*
  .btnAdd,
  .btnCancel {
    position: absolute;
    right: 120px;
    bottom: 30px;
  }
  .btnCancel {
    right: 35px;
  }
  */

  #thumbsUpImg {
    position: relative;
    top: 2px;
  }

  /*
  .container {
    margin-left: 30px;
  }
  .userName {
    margin-left: .5rem;
  }
  .entry {
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
  }
  .reply {
    display: none;
  }
  #replyEntry {
    margin: 0;
  }
  .replyBox {
    position: relative;
    margin-bottom: 10px;
    border-left: 1px solid #aaa;
  }
  #thumbsUpButton {
    padding: 0;
    background: transparent;
    border: none;
  }
  #thumbsUpImg {
    position: relative;
    top: 2px;
  }
  .btnAdd, .btnCancel {
    position: absolute;
    right: 100px;
    bottom: 10px;
  }
  .btnCancel {
    right: 20px;
  }
  */
</style>
