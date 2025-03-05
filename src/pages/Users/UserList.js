import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  IconButton, 
  TextField, 
  Fade 
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userRows } from '../../datas';
import './UserList.css'

export default function UserCardList() {
  const [users, setUsers] = useState(userRows || []);
  const [search, setSearch] = useState('');
  const isDark = useSelector((state) => state.theme.isDark);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  


  return (
    <Container className={isDark ? 'dark-mode user-list-container' : 'user-list-container'}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        className="user-list-title"
      >
        لیست کاربران
      </Typography>
      <Box className="search-box">
        <TextField
          variant="outlined"
          placeholder="جستجو کاربر..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`search-field ${isDark ? 'dark-mode' : ''}`}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Fade in timeout={500}>
              <Card className={`user-card ${isDark ? 'dark-mode' : ''}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={user.avatar}
                  alt={user.username}
                />
                <CardContent>
                  <Typography variant="h6" component="div" className='user-username'>
                    {user.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='user-email'>
                    {user.email}
                  </Typography>
                  <Typography variant="body2" className="user-status">
                    وضعیت: {user.status}
                  </Typography>
                  <Typography variant="body2" className='user-transaction'>
                    خرید : {user.transaction}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton 
                    component={Link} 
                    to={`/user/${user.id}`} 
                    color="primary"
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleDeleteUser(user.id)} 
                    color="error"
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
