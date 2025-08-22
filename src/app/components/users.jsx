import { useState, useEffect } from 'react';
import Pagination from './pagination';
import User from './user';
import { paginate } from '../utils/paginate';
import GroupList from './groupList';
import api from '../api';

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const count = allUsers.length;
    const pageSize = 4;

    useEffect(() => {
        api.professions.fetchAll().then(data => setProfessions(data));
    });

    const handleProfessionSelect = item => {
        setSelectedProf(item);
    };

    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex);
    };
    const filtredUsers = selectedProf
        ? allUsers.filter(user => user.profession === selectedProf)
        : allUsers;

    const userCrop = paginate(filtredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };
    
    return (
        <>
            {professions && (
                <>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                        valueProperty="_id"
                        contentProperty="name"
                    />
                    <button className="btn btn-secondary m-2" onClick={() => clearFilter()}>
                        Очистить
                    </button>
                </>
            )}
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился раз</th>
                            <th scope="col">Оценка</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map(user => (
                            <User key={user._id} {...user} {...rest} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};

export default Users;
