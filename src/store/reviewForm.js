export const UPDATE_CURRENT = "updateCurrent";
export const UPDATE_USER_NAME = "updateUserName";
export const UPDATE_JENRE = "updateUserJenre";
export const UPDATE_REVIEW = "updateUserReview";
import axios from "axios";
const reviewForm = {
    state: {
        music_data: [],
        current: null,
        userId: null,
        music: '',
        form: '',
        postId: '',
        userName: '',
        musicName: '',
        artistName: '',
        image: '',

    },
    getters: {
        current(state) {
            return state.current;
        },
        userName(state) {

            return state.userName;
        }
    },
    mutations: {
        [UPDATE_CURRENT](state, music) {
            state.current = music;
        },
        [UPDATE_USER_NAME](state, users) {
            state.userName = users;
            console.log("users=" + users);
        },
        postMusicInfo(state, music) {
            state.music = music;
        },
        postFormInfo(state, form) {
            state.form = form;
        },
        getPostId(state, postId) {
            state.postId = postId;
        },
        getMusicInfo(state, musicName) {
            state.musicName = musicName;
        },
    },
    actions: {
        [UPDATE_CURRENT]({ commit }, music) {
            commit(UPDATE_CURRENT, music);
        },
        refresh: async function({ commit }, userNum) {
            const res = await axios.get('http://localhost:8080/postform', {
                params: {
                    userNum: userNum,
                }
            })
            this.userName = res.data
            commit(UPDATE_USER_NAME, this.userName)
        },
        postMusicInfo: async function({ commit }, music) {
            await axios.post('http://localhost:8080/music',
                music,
            ).then(commit("postMusicInfo", music));

        },
        getPostId: async function({ commit }, userNum) {
            const res = await axios.get('http://localhost:8080/getPostId', {
                params: {
                    userNum: userNum,
                }
            })
            this.postId = res.data
            commit("getPostId", this.postId)
        },
        postFormInfo: async function({ commit }, form) {
            console.log("form=" + form)
            await axios.post('http://localhost:8080/form',
                form,
            ).then(commit("postFormInfo", form));

        },
        getMusicInfo: async function({ commit }, postId) {
            const res = await axios.get('http://localhost:8080/getMusicInfo', {
                params: {
                    postId: postId,
                }
            })
            this.musicName = res.data
            console.log("museName=" + this.musicName)
            commit("getMusicInfo", this.musicName)
        },
    },
};

export default reviewForm;