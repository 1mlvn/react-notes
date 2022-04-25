import { BsTrashFill } from 'react-icons/bs';


const Note = () => {
    return <div className="note">
        <span>sample text</span>
        <div className="note-footer">
            <small>25/04/2022</small>
            <BsTrashFill className="delete-icon" size="1.25em"/>
        </div>
    </div>;
};

export default Note;