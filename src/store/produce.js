import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';
const LIKETOGGLE = 'produce/LIKE';

export const getAllProduce = (state) => Object.values(state.produce);

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData,
    };
};

export const likeToggle = (produce) => {
    return {
        type: LIKETOGGLE,
        produce,
    };
};

export default function produceReducer (state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState;
        case LIKETOGGLE:
            const likeState = {...state};
            //obtain current boolean value
            const likeToToggle = likeState[action.produce.id].liked;
            //update boolean value (toggle)
            likeState[action.produce.id].liked = !likeToToggle
            return likeState;
        default:
            return state;
    }
};