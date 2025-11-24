import { User } from "/src/hooks.server";
import { fail } from '@sveltejs/kit';

export const actions = {
  login: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    let username = formData.username;
    let email = formData.email;
    let password = formData.password;
    let newuser = formData.newuser;

    let result = await User.find({ username: username, password: password })

    //  check for mongoDB errors (user not found)
    if (result.length > 0) {
      return {
        success: true,
        message: 'User Logged In',
        _id: result[0]._id.toString(),
        username: result[0].username,
        imagename: result[0].imagename
      }
    }
    else {
      //  user not found, check if newuser box checked
      if (newuser === 'newuser') {
        //console.log('server side add new user here')
        // add user to database
        const user = new User({
          username,
          password,
          email,
          imagename: 'icon.png'
        })
        let newuser = await user.save();

        //  check for failure?
        return {
          success: true,
          message: 'New User added',
          _id: newuser._id.toString(),
          username,
          email,
          newuser: newuser.imagename
        }

        // user not found and new user box not checked, issue error
      }
      return fail(400, {
        error: true,
        message: 'User not found',
        username
      })
    }
  }
}