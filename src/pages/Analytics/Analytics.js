import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  ComposedChart,
  Area,
} from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import './Analytics.css'; // اضافه کردن فایل CSS

const data = [
  { name: 'تیر', sales: 4000, users: 2400, revenue: 2400 },
  { name: 'مرداد', sales: 3000, users: 1398, revenue: 2210 },
  { name: 'شهریور', sales: 2000, users: 9800, revenue: 2290 },
  { name: 'مهر', sales: 2780, users: 3908, revenue: 2000 },
  { name: 'آبان', sales: 1890, users: 4800, revenue: 2181 },
  { name: 'آذر', sales: 2390, users: 3800, revenue: 2500 },
  { name: 'دی', sales: 3490, users: 4300, revenue: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8884', '#83CA38'];

const Analytics = () => {
  return (
    <Box className="analytics-container">
      <Typography variant="h4" className="analytics-title">
        داشبورد آنالیز 
      </Typography>
      <Grid container spacing={4}>
        {/* کارت‌های KPI */}
        {[
          { label: 'مجموع فروش', value: '$56,789', icon: <TrendingUpIcon />, color: '#1976d2' },
          { label: 'کاربران جدید', value: '1,234', icon: <GroupIcon />, color: '#2e7d32' },
          { label: 'نرخ سود', value: '23.45%', icon: <InsightsIcon />, color: '#d32f2f' },
          { label: 'درآمد', value: '$34,567', icon: <MonetizationOnIcon />, color: '#ffa000' },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={5}
              className="kpi-card"
              style={{
                background: `linear-gradient(135deg, ${card.color}33, ${card.color}99)`,
              }}
            >
              <Box className="kpi-icon" style={{ color: card.color }}>
                {card.icon}
              </Box>
              <Typography variant="h6" className="kpi-label">
                {card.label}
              </Typography>
              <Typography variant="h4" className="kpi-value" style={{ color: card.color }}>
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
        {/* چارت خطی */}
        <Grid item xs={12} md={8}>
          <Paper elevation={5} className="chart-container">
            <Typography variant="h6" color="textSecondary" mb={2}>
              فروش و کاربران در طول زمان
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="sales" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="users" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* چارت دایره‌ای */}
        <Grid item xs={12} md={4}>
          <Paper elevation={5} className="chart-container">
            <Typography variant="h6" color="textSecondary" mb={2}>
              توزیع کاربران
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="users"
                  nameKey="name"
                  outerRadius={100}
                  innerRadius={60}
                  fill="#8884d8"
                  label={({ name, users }) => `${name}: ${users}`}
                  labelStyle={{
                    fill: '#444',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
