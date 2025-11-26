import { createSlice, nanoid } from "@reduxjs/toolkit"



const initialState = [
    {id : nanoid() , title :"Sample Note" , content: "This Is a Smaple Note Content"}
]


const noteSlice  = createSlice({
    name : "notes",
    initialState ,
    reducers:{
        addNote:{
            reducer(state , action){
                state.push(action.payload)
            },

            prepare(title , content)
            {
                return{
                    playload : {
                        id: nanoid(),
                        title,
                        content,
                        createdAt : new Date().toISOString(),
                    }
                }
            }
        },


        deleteNote(state , action)
        {
            return state.filter(note => idnote.id !== action.payload);
        },

        editNote (state , action)
        {
            const {id , title , content} = action.payload
            const note = state.find((n) => n.id === id)
            if (note) {
                note.title = title
                note.content = content
            }
        },

        clearNotes()
        {
            return[]
        }
    }
});

export const {addNote , deleteNote , editNote , clearNotes} = noteSlice.actions;
export default noteSlice.reducer;