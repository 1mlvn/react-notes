import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 250;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
        else {window.alert("Przekroczyłeś limit znaków")};
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
        else {window.alert("Nie można stworzyć pustej notatki")};
    };

    return(
    <div className="note new">
        <textarea
         rows="8"
         cols="10"
         placeholder="Wprowadź tekst aby dodać notatkę..."
         value={noteText}
         onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>Pozostało {characterLimit - noteText.length} znaków</small>
            <button className="save" onClick={handleSaveClick}>Zapisz</button>
        </div>
    </div>
    );
};

export default AddNote;