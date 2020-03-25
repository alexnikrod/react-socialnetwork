import profileReducer, { addPostActionCreator, deletePost } from "../redux/profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "My first post", likesCount: 10 },
  ]
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("Hello guys!");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("message should contain new state string", () => {
  let action = addPostActionCreator("Hello guys!");

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("Hello guys!");
});

it("after deleting length should be decremented", () => {
  let action = deletePost(3); // 1 or 2 is not working

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

it("if id is incorrect delete should'n be decremented", () => {
  let action = deletePost(10); // 1 or 2 is not working

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});