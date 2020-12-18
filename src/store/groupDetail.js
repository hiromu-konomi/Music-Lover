import axios from 'axios'

// グループ詳細画面に関するストア
const groupDetail = {
    state: {
        // グループ情報
        groupData: {
            groupId: undefined,
            groupName: undefined,
            groupDescription: undefined,
            ownerId: undefined,
            // ユーザーのグループ参加状況（１：参加済, ２：招待済, undefined：不参加）
            joinStatus: undefined,
        },
    },
    mutations: {
        setGroupData(state, resData) {
            state.groupData.groupId = resData.groupId;
            state.groupData.groupName = resData.groupName;
            state.groupData.ownerId = resData.ownerId;
            state.groupData.joinStatus = resData.joinStatus;
        },

        setJoinStatus(state, resData) {
            state.groupData.joinStatus = resData;
        }
    },
    actions: {
        async setGroupData({commit}, {userNum}) {
            await axios.get("http://localhost:8080/showGroup", {
                params: {
                    userNum: userNum,
                },
            })
            .then((response) => {
                commit("setGroupData", response.data);
            })
            .catch((reason) => console.log(reason));
        },

        async setJoinStatus({commit}, userNum) {
            await axios.get("http://localhost:8080/setJoinStatus", {
                params: {
                    userNum: userNum,
                    groupId: this.state.groupData.groupId
                }
            })
            .then((response) => {
                commit("setJoinStatus", response.data);
            })
            .catch((reason) => console.log(reason));
        },
    }
}

export default groupDetail