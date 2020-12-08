export const UPDATE_CURRENT = 'updateCurrent';
export const UPDATE_USER_NAME = 'updateUserName';
export const UPDATE_JENRE = 'updateUserJenre';
export const UPDATE_REVIEW = 'updateUserReview';
import axios from 'axios'
const reviewForm = {
    state: {
        music_data: [],
        current: null,

        jenre: null,
        review: null,
        userId: null,

    },
    getters: {
        current(state) {
            return state.current;
        },
    },
    mutations: {
        [UPDATE_CURRENT](state, music) {
            state.current = music;
        },
        [UPDATE_USER_NAME](state, users) {
            state.userName = users;
            console.log("users=" + users);
        },
        [UPDATE_JENRE](state, jenre) {
            state.jenre = jenre;
            console.log("jenre=" + jenre);
        },
        [UPDATE_REVIEW](state, review) {
            state.review = review;
            console.log("review=" + review);
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
            console.log("userNum=" + this.userNum)
            console.info("userName=" + this.userName)
            commit(UPDATE_USER_NAME, this.userName)
        },
        postMusicInfo: async function(music) {
            console.log("music=" + music)
            await axios.post('http://localhost:8080/music',

                    music,

                )
                // this.userName = res.data,
                // this.jenre = res.data,
                // this.review = res.data,
                // commit(UPDATE_CURRENT, UPDATE_USER_NAME, UPDATE_JENRE, UPDATE_REVIEW, this.current, this.userName, this.jenre, this.review)
        },
        postFormInfo: async function(form) {
            console.log("form=" + form)
            await axios.post('http://localhost:8080/form',

                    form,

                )
                // this.userName = res.data,
                // this.jenre = res.data,
                // this.review = res.data,
                // commit(UPDATE_CURRENT, UPDATE_USER_NAME, UPDATE_JENRE, UPDATE_REVIEW, this.current, this.userName, this.jenre, this.review)
        }

    },
};

export default reviewForm;