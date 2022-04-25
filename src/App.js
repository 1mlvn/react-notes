
import { nanoid } from 'nanoid';
import { useState } from 'react';
import NotesList from './components/NotesList';
import './index.css';


const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "Przykładowa notatka 1",
    date: "25/04/2022"
    },
    {
    id: nanoid(),
    text: "Przykładowa notatka 2",
    date: "26/07/2022"
    },
    {
    id: nanoid(),
    text: "Przykładowa notatka 3",
    date: "12/12/2012"
    },
]);

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text, 
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  };

  return <div className='container'>
    <NotesList notes={notes} handleAddNote={addNote}/>
  </div>;
}

export default App;
