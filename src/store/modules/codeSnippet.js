const state = {
    templatesObj: {
        input: `<h3 style="color:[color]; font-family:[font];">[headline]</h3><input type="text" style="font-family:[font]; max-width:260px; width:100%; height:22px; padding:3px 5px;"/>`,
        textarea: `<h3 style="color:[color]; font-family:[font];">[headline]</h3><textarea style="font-family:[font]; max-width:260px; width:100%; height:42px; padding: 3px 5px;"></textarea>`,
        checkbox: `<h3 style="color:[color]; font-family:[font];">[headline]</h3><input type="checkbox" style="font-family:[font];"/>`
    }, 
    snippets: [
        {
            type: 'input',
            color: 'red',
            headline: 'Input Field',
            font: 'Arial'
        },
        {
            type: 'textarea',
            color: 'blue',
            headline: 'Textarea',
            font: 'Times'
        },
        {
            type: 'checkbox',
            color: 'green',
            headline: 'Checkbox',
            font: 'Courier'
        }
    ],
    colors: ['red', 'blue', 'green', 'yellow', 'purple', 'black'],
    fonts: ['Arial', 'Helvetica', 'sans-serif', 'Verdana', 'Courier', 'Times'], 
    currentSnippet: {
        type: '',
        color: '',
        headline: '',
        font: ''
    }
}

const getters = {
    snippets: function (state) {
        return state.snippets;
    },
    templatesObj: function (state) {
        return state.templatesObj;
    },
    colors: function (state) {
        return state.colors;
    },
    fonts: function (state) {
        return state.fonts;
    },
    currentSnippet: function (state) {
        return state.currentSnippet;
    }
}

const mutations = {
    setSnippets: function (state, payload) {
        state.snippets.push(payload);
    },
    setCurrentSnippetsInputType: function (state, payload) {
        state.currentSnippet.type = payload;
    },
    setCurrentSnippetsColor: function (state, payload) {
        state.currentSnippet.color = payload;
    },
    setCurrentSnippetsHeadline: function (state, payload) {
        state.currentSnippet.headline = payload;
    },
    setCurrentSnippetsFont: function (state, payload) {
        state.currentSnippet.font = payload;
    },
    setNewSnippets: function (state, payload) {
        state.snippets = payload;
    }
}

export default {
    state,
    getters,
    mutations
}
