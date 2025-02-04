import React, { useState } from 'react';
import { userRows } from '../../datas';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';

export default function UserList() {
  const [usersData, setUsersData] = useState(userRows);

  const handleDeleteUser = (userId) => {
    setUsersData(usersData.filter((user) => user.id !== userId));
  };

  const isDark = useSelector((state)=>state.theme.isDark)

  const columns = [
    {
      field: 'id',
      headerName: 'شناسه',
      width: 90,
    },
    {
      field: 'user',
      headerName: 'کاربر',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: 'email',
      headerName: 'ایمیل',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'معامله',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'عملیات',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link className="link">
              <button className="userListEdit">ویرایش</button>
            </Link>
            <DeleteOutlinedIcon
              className="userListDelete"
              onClick={() => handleDeleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={isDark ? 'dark-mode userList' : 'userList'}>
      <DataGrid
        rows={usersData}
        columns={columns}
        pageSize={6}
        disableSelectionOnClick
      />
    </div>
  );
}
