let xAxisData = [
    {
        "name" : "فروردین",
        "sale" : 112000
    }, 
    {
        "name" : "اردیبهشت",
        "sale" : 99000
    }, 
    {
        "name" : "خرداد",
        "sale" : 12000
    }, 
    {
        "name" : "تیر",
        "sale" : 133000
    }, 
    {
        "name" : "مرداد",
        "sale" : 57000
    }, 
    {
        "name" : "شهریور",
        "sale" : 112000
    }, 
    {
        "name" : "مهر",
        "sale" : 79000
    }, 
    {
        "name" : "آبان",
        "sale" : 83000
    }, 
    {
        "name" : "آذر",
        "sale" : 19000
    }, 
    {
        "name" : "دی",
        "sale" : 46000
    }, 
    {
        "name" : "بهمن",
        "sale" : 77000
    }, 
    {
        "name" : "اسفند",
        "sale" : 98000
    } 
];
 
let newUser = [
    {id : 2 , userName : 'Alireza Ebrahimi' , title : 'SEO Eng ', img : process.env.PUBLIC_URL + '/images/newuser.jpg' },
    {id : 1 , userName : 'Hosein Moradi' , title : 'Frontend developer ', img : process.env.PUBLIC_URL + '/images/newuser2.jpg' },
    {id : 3 , userName : 'Arash Rezavand' , title : 'backend developer ', img : process.env.PUBLIC_URL + '/images/newuser3.jpg' },
    {id : 4 , userName : 'Mohsen Bahmani' , title : 'Hacker', img : process.env.PUBLIC_URL + '/images/newuser4.jpg' }
];

let Transactions = [
    {
    id : 1 ,
    customer : 'Shayan Mohamadi',
    date : '۱۴۰۲/۱۱/۹',
    amount : "۱۴۵",
    status : 'Approved',
    img : process.env.PUBLIC_URL + '/images/customer.jpg'},
    {
    id : 2 ,
    customer : 'Maryam Asadi',
    date : '۱۴۰۲/۱/۳',
    amount : "۷۸",
    status : 'Pending',
    img : process.env.PUBLIC_URL + '/images/customer3.jpg'},
    {
    id : 3 ,
    customer : 'Amir Frahani',
    date : '۱۴۰۲/۳/۸',
    amount : "۵۶",
    status : 'Decline',
    img : process.env.PUBLIC_URL + '/images/customer2.jpg'},
    {
    id : 4 ,
    customer : 'Zahra Amini',
    date : '۱۴۰۲/۴/۲۲',
    amount : "۶۲",
    status : 'Approved',
    img : process.env.PUBLIC_URL + '/images/customer4.jpg'},
    {
    id : 5 ,
    customer : 'kamyar fathi',
    date : '۱۴۰۱/۳/۱۸',
    amount : "۴۵",
    status : 'Approved',
    img : process.env.PUBLIC_URL + '/images/customer5.jpg'},
    {
    id : 6 ,
    customer : 'Sara karimi',
    date : '۱۴۰۱/۴/۱۹',
    amount : "۶۲",
    status : 'Pending',
    img : process.env.PUBLIC_URL + '/images/customer6.jpg'},
]

let userRows = [
    {
    id : 1 ,
    username : 'Sahar Azizi',
    avatar: process.env.PUBLIC_URL + '/images/users4.jpg',
    status : 'فعال',
    transaction : "$140",
    email : 'Sahar@gmail.com'
 },
    {
    id : 2 ,
    username : 'Aref Aghasi',
    avatar: process.env.PUBLIC_URL + '/images/users.jpg',
    status : 'غیر فعال',
    transaction : "$120",
    email : 'Aref@gmail.com'
 },
    {
    id : 3 ,
    username : 'Mehdi hoseinzadeh',
    avatar: process.env.PUBLIC_URL + '/images/users2.jpg',
    status : 'فعال',
    transaction : "$79.5",
    email : 'Mehdi@gmail.com'
 },
    {
    id : 4 ,
    username : 'Negar Alipour',
    avatar: process.env.PUBLIC_URL + '/images/users5.jpg',
    status : 'فعال',
    transaction : "$108",
    email : 'Negar@gmail.com'
 },
    {
    id : 5 ,
    username : 'Radin Falah',
    avatar: process.env.PUBLIC_URL + '/images/users3.jpg',
    status : 'فعال',
    transaction : "$55.78",
    email : 'Radin@gmail.com'
 },
    {
    id : 6 ,
    username : 'Armin Ghafouri',
    avatar: process.env.PUBLIC_URL + '/images/user6.jpg',
    status : 'غیر فعال',
    transaction : "$122.19",
    email : 'Armin@gmail.com'
 },
    {
    id : 7 ,
    username : 'Mobina Nezamdoost',
    avatar: process.env.PUBLIC_URL + '/images/user7.jpg',
    status : 'فعال',
    transaction : "$64.5",
    email : 'Mobina@gmail.com'
 },
    {
    id : 8 ,
    username : 'Zahra Lotfi',
    avatar: process.env.PUBLIC_URL + '/images/user8.jpg',
    status : 'فعال',
    transaction : "$53",
    email : 'Zahra@gmail.com'
 },
    {
    id : 9 ,
    username : 'Farhad jamali',
    avatar: process.env.PUBLIC_URL + '/images/user9.jpg',
    status : 'فعال',
    transaction : "$77",
    email : 'farhad@gmail.com'
 },
]

let Products = [
    {
        id : 1,
        title : 'Asus',
        avatar : process.env.PUBLIC_URL + '/images/asus.jpg',
        price : 829
    },
    {
        id : 2,
        title : 'Acer',
        avatar : process.env.PUBLIC_URL + '/images/acer.jpg',
        price : 700
    },
    {
        id : 3,
        title : 'HP',
        avatar : process.env.PUBLIC_URL + '/images/hp.jpg',
        price : 644
    },
    {
        id : 4,
        title : 'Dell',
        avatar : process.env.PUBLIC_URL + '/images/dell.jpg',
        price : 580
    },
]

let ProductsData = [
    {name : "Jan",sales :4300},
    {name : "Feb",sales :2850},
    {name : "Mar",sales :5130}
]
const feedbacks = [
    {
      user: "کاربر ۱",
      comment:
        "محصولات خیلی خوبه ولی قیمت‌ها یکم بالاست. اگر تخفیف بیشتری باشه عالی میشه",
      rating: 4,
    },
    {
      user: "کاربر ۲",
      comment:
        "سایت فوق‌العاده‌ای هست! همه چیز خیلی منظم و راحت قابل دسترسیه.   ",
      rating: 5,
    },
    {
      user: "کاربر ۳",
      comment:
        "بخش پشتیبانی سریع و حرفه‌ای پاسخ می‌ده، ولی تنوع محصولات می‌تونست بیشتر باشه.",
      rating: 4,
    },
    {
      user: "کاربر ۴",
      comment:
        "اطلاعات محصولات دقیق نیست و عکس‌ها با واقعیت فرق داشت. از خریدم پشیمونم.",
      rating: 3,
    },
    {
      user: "کاربر ۵",
      comment:
        "تجربه خریدم عالی بود! هم ارسال سریع و هم کیفیت بالا. حتماً باز هم خرید می‌کنم.",
      rating: 5,
    },
    {
      user: "کاربر ۶",
      comment:
        "سایت جذاب است، اما یافتن محصولات سخت بود؛ جستجو نیاز به بهبود دارد.",
      rating: 3,
    },
    {
      user: "کاربر ۷",
      comment:
        "سرعت سایت پایین است و هر کلیک چند ثانیه طول می‌کشد؛ لطفاً مشکل را رفع کنید.",
      rating: 1,
    },
    {
      user: "کاربر ۸",
      comment:
        "چندین بار تلاش کردم خرید کنم ولی هر بار پرداخت ناموفق بود. خیلی اذیت شدم.",
      rating: 3,
    },
    {
      user: "کاربر ۹",
      comment:
        "قیمت‌ها مناسب و ارسال به موقع بود، ولی بسته‌بندی محصولات جای بهتر شدن داره.",
      rating: 4,
    },
    {
      user: "کاربر ۱۰",
      comment:
        "تنوع محصولات خیلی خوبه و همه چیز رو می‌تونم اینجا پیدا کنم. عالیه!",
      rating: 5,
    },
  ];
  


export {xAxisData , newUser ,Transactions,userRows,Products,ProductsData,feedbacks};
