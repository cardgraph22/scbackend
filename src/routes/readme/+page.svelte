<div class="flex flex-col items-center pt-5 bg-gray-100 h-dvh overflow-hidden">
  <div class="bg-white p-8 shadow-lg w-full max-w-3xl">
    <h2 class="text-left text-lg font-semibold mb-2">This is the Svelte-Club second project - do something with the back end.</h2>
    <ul class="text-left space-y-1 list-none">Goals
      <li class="ml-6 list-disc text-gray-800"><p class="text-left ">Load images from backend</p></li>
      <li class="ml-6 list-disc text-gray-800"><p>Login (with add user) and store in MongoDB Atlas</p></li>
      <li class="ml-6 list-disc text-gray-800"><p>List Users from MongoDB Atlas</p></li>
      <li class="ml-6 list-disc text-gray-800"><p>The two learning sub-projects: Load (home page) and database functions (login, list) are unrelated (at this point),
        but the project is a convenient means to learn both.
      </p></li>
    </ul>
    <ul class="space-y-1 list-none">Home Page
      <li class="ml-6 list-disc text-gray-800">
        <p class="max-w-[800px] overflow-wrap wrap-break-word">
          The intent here is to load images from the backend. <span class="italic">Currently, this is being done on the front-end until I learn the Svelte async function.   I also want to try the new remote functions.</span>
        </p>
      </li>
      <li class="ml-6 list-disc text-gray-800">
        <p>Login (with add user) and store in MongoDB Atlas</p>
        <p><span class="italic">I am not a fan of MongoDB Atlas complexity (complex to me, anyway)</span></p>
        <p><span class="italic">I am looking for a simpler solution.</span></p>
      </li>
      <li class="ml-6 list-disc text-gray-800">
        <p>List Users from MongoDB Atlas</p>
        <p>The Admin? column and checkbox is a way for me to set The Delete button to enabled/disabled.</p>
        <p>Obviously, this would be tied to the logged in user for production.</p>
      </li>
    </ul>
    <hr class="border-gray-500">
    <h2 class="text-left text-lg font-semibold mb-2">Summary of week's progress</h2>
     <ul class="space-y-1 list-none">Loading data
      <li class="ml-6 list-disc text-gray-800">
        <p class="max-w-[800px] overflow-wrap wrap-break-word">
          <span>Images loaded from backend.  I experimented with remote functions with mixed success.  It is still an 'experimental'
            feature in svelte, but I think it'll be the way to go once it's production released.
          </span>
        </p>
      </li>
      <li class="ml-6 list-disc text-gray-800">
        <p>Login (with add user) and store in MongoDB Atlas:</p>
        <p>This is operational, but all the settings and options in MongoDB Atlas are overwhelming (to me) for a hobby project.</p>
        <p>I still need to hash the password for database storeage.  I plan to use bcrypt for this.</p>
      </li>
      <li class="ml-6 list-disc text-gray-800">
        <p>UI/UX</p>
        <p>I don't like the momentary resizing/flicker of images on home page load - I need to address this.</p>
      </li>
    </ul>
  </div> 
</div>