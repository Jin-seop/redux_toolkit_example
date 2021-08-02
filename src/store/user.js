import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const postUser = createAsyncThunk('user/postUser',async () => {
    return await axios
    .post('API주소입력',{키:밸류})
    .then(res => res.data)
    .catch(err => console.log(err))
})
// 상태에대한 action은 자동으로 생성된다
// postUser.pending => user/postUser/pending 
// postUser.fulfilled  => user/postUser/fulfilled
// postUser.rejected  => user/postUser/rejected


const userSlice =  createSlice({
    //호출 이름정의
    name:'user',
    initialState:{
        resCode:null,
        resMsg:'호출전',
        resData:{},
        loading:false
    },
    //리듀서 함수 정의
    reducers:{
        setUser : (state,action) => {
            state = action.payload
        }
    },
    //API호출시 action정의
    extraReducers:{
        [postUser.pending.type]:(state,action) => {
            //호출전
            state.loading = true;
        },
        [postUser.fulfilled.type] : (state,action) => {
            //성공
            const {resCode,resData,resMsg} = action.payload
            state.loading = true
            state.resCode = resCode
            state.resData = resData
            state.resMsg = resMsg
        },
        [postUser.rejected.type] : (state,action) => {
            //실패
            state.loading = true;  
        }
    }
})

//redux action 내보내기
export const {
    setUser
} = userSlice.actions

//state내보내기
export const Msg = (state) => state.userSlice.resCode
//store로 내보내기
export default userSlice.reducer
