import TableBody from './tableBody';
import TableHeader from './tableHeader';
// import User from './user';

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
        professions: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: { path: 'completedMeetings', name: 'Встретился раз' },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: { path: 'bookmark', name: 'Избранное' },
        delete: {},
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
