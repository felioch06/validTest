export const state = () => ({
    text: "",
    variant: ""
});

export const mutations = {
    setToastText: (state:any, payload:any) => {
        state.text = payload;
    },
    setToastVariant: (state:any, payload:any) => {
        state.variant = payload;
    }
};

export const getters = {
    getToastText: (state:any) => {
        return state.text;
    },
    getToastVariant: (state:any) => {
        return state.variant;
    }
};