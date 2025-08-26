import { useState, useEffect } from 'react';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
import GroupList from './groupList';
import api from '../api';
import SearchStatus from './searchStatus';
import UsersTable from './usersTable';
import _ from 'lodash';

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' });
    const pageSize = 8;

    useEffect(() => {
        api.professions.fetchAll().then(data => setProfessions(data));
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = item => {
        setSelectedProf(item);
    };

    const handleSort = item => {
        setSortBy(item);
    };

    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf
        ? allUsers.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
        : allUsers;

    const count = filteredUsers.length;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
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
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
                    <UsersTable
                        users={userCrop}
                        onSort={handleSort}
                        currentSort={sortBy}
                        {...rest}
                    />
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Users;
