import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
        window.alert("Nie można stworzyć pustej notatki");
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
            <small>Pozostało 250 znaków</small>
            <button className="save" onClick={handleSaveClick}>Zapisz</button>
        </div>
    </div>
    );
};

export default AddNote;