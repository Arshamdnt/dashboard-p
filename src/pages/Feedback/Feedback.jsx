import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Rating,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./FeedbackComponent.css";
import { feedbacks } from "../../datas";

const FeedbackComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < feedbacks.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : feedbacks.length - 1
    );
  };

  // داده‌ها برای BarChart
  const chartData = feedbacks.map((feedback, index) => ({
    name: `کاربر ${index + 1}`,
    محبوبیت: feedback.rating * 20, // محبوبیت به درصد (rating * 20)
  }));

  return (
    <div className="feedback-container">
      <Paper elevation={4} className="feedback-section">
        {/* بخش نظرات */}
        <Card className="feedback-card">
          <CardContent>
            <Typography variant="h6" gutterBottom className="feedback-user">
              {feedbacks[currentIndex].user}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="feedback-comment"
            >
              {feedbacks[currentIndex].comment}
            </Typography>
            <Rating
              name="user-rating"
              value={feedbacks[currentIndex].rating}
              precision={0.5}
              readOnly
              className="feedback-rating"
            />
          </CardContent>
        </Card>
        <div className="feedback-buttons">
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePrevious}
            className="feedback-button"
          >
            قبلی
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleNext}
            className="feedback-button"
          >
            بعدی
          </Button>
        </div>
      </Paper>

      {/* بخش نمودار */}
      <Paper elevation={4} className="chart-section">
        <Typography variant="h6" align="center" gutterBottom>
          میزان محبوبیت سایت
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="محبوبیت" fill="#5c67f2" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
};

export default FeedbackComponent;
