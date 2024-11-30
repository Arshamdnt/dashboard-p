import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Tabs, Tab } from "@mui/material";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import "./Reports.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const UserInteractionReport = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const totalVisits = 15840;
  const avgSessionTime = "۴ دقیقه و ۳۲ ثانیه";
  const bounceRate = "۲۷٪";

  const hourlyData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}`),
    datasets: [
      {
        label: "بازدیدهای ساعتی",
        data: [50, 30, 20, 10, 15, 25, 40, 60, 70, 80, 100, 120, 150, 140, 130, 110, 90, 80, 70, 60, 40, 30, 20, 10],
        borderColor: "#3f51b5",
        backgroundColor: "rgba(63, 81, 181, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const dailyData = {
    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"],
    datasets: [
      {
        label: "بازدیدهای روزانه",
        data: [200, 300, 250, 400, 350, 500, 450],
        borderColor: "#ff5722",
        backgroundColor: "rgba(255, 87, 34, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const weeklyData = {
    labels: ["هفته ۱", "هفته ۲", "هفته ۳", "هفته ۴", "هفته ۵"],
    datasets: [
      {
        label: "بازدیدهای هفتگی",
        data: [1500, 1800, 2000, 2200, 2500],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const deviceUsageData = {
    labels: ["موبایل", "دسکتاپ", "تبلت"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#42a5f5", "#66bb6a", "#ffa726"],
        hoverBackgroundColor: ["#2196f3", "#43a047", "#fb8c00"],
      },
    ],
  };

  return (
    <Box className="reports-container">
      <Typography variant="h4" gutterBottom className="reports-title">
        گزارش تعامل کاربران
      </Typography>

      {/* اطلاعات کلی */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card className="card card-1">
            <CardContent>
              <Typography variant="h6" className="card-title">
                تعداد بازدید کل
              </Typography>
              <Typography variant="h4" className="card-number">
                {totalVisits}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card card-2">
            <CardContent>
              <Typography variant="h6" className="card-title">
                میانگین زمان حضور
              </Typography>
              <Typography variant="h4" className="card-number">
                {avgSessionTime}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card card-3">
            <CardContent>
              <Typography variant="h6" className="card-title">
                نرخ پرش
              </Typography>
              <Typography variant="h4" className="card-number">
                {bounceRate}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* تب‌بندی نمودارها */}
      <Card className="chart-card">
        <CardContent>
          <Tabs value={activeTab} onChange={handleTabChange} centered className="tabs">
            <Tab label="ساعتی" />
            <Tab label="روزانه" />
            <Tab label="هفتگی" />
          </Tabs>

          {activeTab === 0 && (
            <Box className="chart-container">
              <Line data={hourlyData} options={{ responsive: true }} />
            </Box>
          )}
          {activeTab === 1 && (
            <Box className="chart-container">
              <Line data={dailyData} options={{ responsive: true }} />
            </Box>
          )}
          {activeTab === 2 && (
            <Box className="chart-container">
              <Line data={weeklyData} options={{ responsive: true }} />
            </Box>
          )}
        </CardContent>
      </Card>

      {/* نمودار دایره‌ای استفاده از دستگاه‌ها */}
      <Grid container spacing={4} className="charts-container">
        <Grid item xs={12} md={6}>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6" gutterBottom className="chart-title">
                استفاده از دستگاه‌ها
              </Typography>
              <Pie data={deviceUsageData} options={{ responsive: true }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserInteractionReport;
