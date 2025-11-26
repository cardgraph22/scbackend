import { query } from '$app/server';
import { User } from "/src/hooks.server";

export const getUsers = query(async () => {
  console.log('data.remote, getUsers')
  let users = await(User.find())
  users = JSON.parse(JSON.stringify(users));
  console.log('data.remote, users', users)
  return users;
  /*
	const posts = await db.sql`
		SELECT title, slug
		FROM post
		ORDER BY published_at
		DESC
	`;

	return posts;
  */
});
/*
import { User } from "/src/hooks.server";

export async function load() {
  let users = await(User.find())
  //  !!! use the following for production (do not return password)
  //users = JSON.parse(JSON.stringify(users,['_id', 'username', 'imagename']));
  users = JSON.parse(JSON.stringify(users));
  return {users};
}

// delete user
export const actions = {
	default: async ({request}) => {
    const formData = Object.fromEntries(await request.formData());
    let userid = formData.userid
    const result = await User.findByIdAndDelete(userid);
	}
};
*/