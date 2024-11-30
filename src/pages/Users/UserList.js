import React from 'react';
import { useState } from 'react';
import { userRows } from '../../datas';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function لیستکاربران() {
  const [داده‌هایکاربر, setداده‌هایکاربر] = useState(userRows);

  const حذفکاربر = (شناسهکاربر) => {
    setداده‌هایکاربر(داده‌هایکاربر.filter((user) => user.id !== شناسهکاربر));
  };

  const ستون‌ها = [
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
            <Link className="Link">
              <button className="userListEdit">ویرایش</button>
            </Link>
            <DeleteOutlinedIcon
              className="userListDelete"
              onClick={() => حذفکاربر(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={داده‌هایکاربر}
        columns={ستون‌ها}
        pageSize={6}
        disableSelectionOnClick
      />
    </div>
  );
}
