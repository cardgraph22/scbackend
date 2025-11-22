class Blogs {

  constructor() {
    this.blogsState = $state([])
  }

  reset = () => {
    this.blogsState = [];
    console.log('reset')
  }
  add = (b) => {
    this.blogsState.push(b)
    //console.log('add', b)
    //$inspect('add', this.blogsState)
  }

  getblogs(){
    return this.blogsState
  }
  /*
  addmany = (bs) => {

  }
    */
}

export const clblogs= new Blogs();

//export const blogsState = $state([]);
//export function initb() {
//  let blogsState = $state([])
//}


// all blogs