import User from './user';

const UsersTable = ({ users, onSort, ...rest }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => onSort('name')} scope="col">
                        Имя
                    </th>
                    <th scope="col">Качества</th>
                    <th onClick={() => onSort('profession.name')} scope="col">
                        Профессия
                    </th>
                    <th onClick={() => onSort('completedMeetings')} scope="col">
                        Встретился раз
                    </th>
                    <th onClick={() => onSort('rate')} scope="col">
                        Оценка
                    </th>
                    <th onClick={() => onSort('bookmark')}>Избранное</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <User key={user._id} {...user} {...rest} />
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
