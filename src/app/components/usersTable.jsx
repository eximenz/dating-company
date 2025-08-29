import BookMark from './bookmark';
import TableBody from './tableBody';
import TableHeader from './tableHeader';
// import User from './user';

const UsersTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete, ...rest }) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
        professions: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: { path: 'completedMeetings', name: 'Встретился раз' },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: user => (
                <BookMark status={user.bookmark} onClick={() => onToggleBookMark(user._id)} />
            ),
        },
        delete: {
            component: user => (
                <button className="btn btn-danger m-1" onClick={() => onDelete(user._id)}>
                    delete
                </button>
            ),
        },
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
            {/* <tbody>
                {users.map(user => (
                    <User key={user._id} {...user} {...rest} />
                ))}
            </tbody> */}
        </table>
    );
};

export default UsersTable;
