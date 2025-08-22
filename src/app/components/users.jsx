import { useState } from 'react';
import Pagination from './pagination';
import User from './user';
import { paginate } from '../utils/paginate';
import GroupList from './groupList';
import api from '../api';

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState(api.professions.fetchAll());
    const count = users.length;
    const pageSize = 4;

    const handleProfessionSelect = params => {
        console.log(params);
    };
    console.log(professions);

    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
            <GroupList items={professions} onItemSelect={handleProfessionSelect} />
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
