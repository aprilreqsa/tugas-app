import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('<htpps://jsonplaceholder.typicode.com/posts');
    return response.json()
})

interface PostsState {
    posts: any[];
    loading: boolean;
}

const initialState: PostsState = { posts: [], loading: false}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.loading = false
            })
    }
})

export default postsSlice;