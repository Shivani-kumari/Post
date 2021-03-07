import { FETCHPOST,LIKEEPOST} from "../type"

const initialState = {
    postList: [],
    likePostList:[],
    list:[]
    
}

const CurdReducer = (state = initialState, action) => {
    let a=[]
    switch (action.type) {
        case FETCHPOST:
            return {
                ...state,
                postList: action.payload
            };
            case LIKEEPOST:
            return {
                ...state,
                likePostList: action.payload

            };
       
        default:
            return state;
    }
};
export default CurdReducer