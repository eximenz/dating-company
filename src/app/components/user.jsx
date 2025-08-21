import BookMark from './bookmark';
import Qualitie from './qualitie';

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark,
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map(qual => (
                    <Qualitie key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <BookMark status={bookmark} onClick={() => onToggleBookMark(_id)} />
            </td>
            <td>
                <button className="btn btn-danger m-1" onClick={() => onDelete(_id)}>
                    delete
                </button>
            </td>
        </tr>
    );
};
export default User;
