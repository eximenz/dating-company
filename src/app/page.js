'use client';
import { useState } from 'react';
import api from './api';
import Users from './components/users';
import SearchStatus from './components/searchStatus';

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = userId => setUsers(users.filter(user => user._id !== userId));

    const handleToggleBookMark = id => {
        setUsers(
            users.map(user => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <>
            <SearchStatus length={users.length} />
            <Users onDelete={handleDelete} onToggleBookMark={handleToggleBookMark} users={users} />
        </>
    );
};

export default App;
