import { BsTrashFill } from 'react-icons/bs';

const Note = ({ id, text, date }) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <BsTrashFill className="delete-icon" size="1.25em"/>
            </div>
        </div>
    );
};

export default Note;