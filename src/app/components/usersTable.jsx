import TableHeader from './tableHeader';
import User from './user';

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { iter: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
        professions: { iter: 'profession.name', name: 'Профессия' },
        completedMeetings: { iter: 'completedMeetings', name: 'Встретился раз' },
        rate: { iter: 'rate', name: 'Оценка' },
        bookmark: { iter: 'bookmark', name: 'Избранное' },
        delete: {},
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <tbody>
                {users.map(user => (
                    <User key={user._id} {...user} {...rest} />
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
