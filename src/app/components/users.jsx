'use client';
import { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = userId => {
        setUsers(users.filter(user => user._id !== userId));
    };

    const renderPhrase = number => {
        return (
            <span className="badge bg-primary m-1">{`${number} ${
                number === 2 || number === 3 || number === 4 ? 'человека' : 'человек'
            } тусанет с тобой сегодня`}</span>
        );
    };

    if (users.length === 0)
        return <span className="badge bg-danger m-1">Никто с тобой не тусанет</span>;
    return (
        <>
            <span>{renderPhrase(users.length)}</span>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <th scope="row">{user.name}</th>
                            <td>
                                {user.qualities.map(quality => (
                                    <span
                                        key={quality._id}
                                        className={`badge bg-${quality.color} m-1`}
                                    >
                                        {quality.name}
                                    </span>
                                ))}
                            </td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}</td>
                            <td>
                                <button
                                    className="btn btn-danger m-1"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Users;
