import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './Management.css';  // وارد کردن استایل‌های جدید
import { useSelector } from 'react-redux';

// داده‌های نمونه برای نمودار RadarChart
const data = [
  { subject: 'عملکرد سایت', A: 120, fullMark: 150 },
  { subject: 'تعداد کاربران', A: 130, fullMark: 150 },
  { subject: 'درآمد ماهانه', A: 90, fullMark: 150 },
  { subject: 'سطح رضایت مشتری', A: 100, fullMark: 150 },
  { subject: 'تعداد سفارشات', A: 110, fullMark: 150 },
];


const Management = () => {

  const isDark = useSelector((state)=>state.theme.isDark);

  return (
    <div className={isDark ? 'dark-mode management-container' : 'management-container'}>
      <h2 className="section-title">مدیریت سایت</h2>

      {/* بخش نمودار و اطلاعات */}
      <div className="chart-and-info">
        {/* بخش نمودار RadarChart */}
        <div className="chart-container">
          <h3>تحلیل عملکرد سایت</h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius="80%" data={data}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="عملکرد سایت" dataKey="A" stroke="#f44336" fill="#f44336" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* بخش اطلاعات */}
        <div className="info-container">
          <h3>اطلاعات مدیریتی</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        </div>
      </div>

      {/* بخش‌های مدیریتی */}
      <div className="management-sections">
        {/* بخش مدیریت کاربران */}
        <div className="management-section">
          <h3>مدیریت کاربران</h3>
          <ul>
            <li>مشاهده کاربران</li>
            <li>ایجاد، ویرایش و حذف کاربران</li>
            <li>جستجو و فیلتر کاربران</li>
          </ul>
        </div>

        {/* بخش مدیریت محصولات */}
        <div className="management-section">
          <h3>مدیریت محصولات</h3>
          <ul>
            <li>مشاهده و ویرایش محصولات</li>
            <li>اضافه کردن محصولات جدید</li>
            <li>مدیریت موجودی و قیمت‌ها</li>
          </ul>
        </div>

        {/* بخش گزارش‌ها */}
        <div className="management-section">
          <h3>گزارش‌ها</h3>
          <ul>
            <li>گزارش مالی</li>
            <li>گزارش فروش روزانه</li>
            <li>گزارش تحلیل کاربران</li>
          </ul>
        </div>

        {/* بخش تنظیمات */}
        <div className="management-section">
          <h3>تنظیمات</h3>
          <ul>
            <li>تنظیمات امنیتی</li>
            <li>تنظیمات اعلان‌ها</li>
            <li>تنظیمات عمومی سایت</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Management;
