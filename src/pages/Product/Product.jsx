import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { ProductsData } from '../../datas';
import PublishIcon from '@mui/icons-material/Publish';
import { useSelector } from 'react-redux';
import './Product.css'
const Product = () => {
    const isDark = useSelector((state)=>state.theme.isDark);
    return (
        <div className={isDark ? 'dark-mode product' : 'product'}>
         <div className='productTitleContainer'>
            <h1 className='productTitle'>محصول</h1>
            <Link to='newProduct'>
            <button className='productAddButton'>ایجاد</button>
            </Link>
         </div>

        <div className="productTop">

            <div className="productTopLeft">
                <Chart title='فروش در ماه' data={ProductsData} dataKey="sales"/>
            </div>

            <div className="productTopRight">
                <div className='productInfoTop'>
                    <img src={process.env.PUBLIC_URL + '/images/asus.jpg'} alt="product" className='productInfoImg' />
                    <span className='productName'>asus Laptop</span>
                </div>

                <div className="productInfoButtom">
                    <div className='productInfoItem'>
                        <div className="productInfoKey">شناسه: </div>
                        <div className='productInfoValue'>132</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">نام: </div>
                        <div className='productInfoValue'>asus Laptop</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">فروش: </div>
                        <div className='productInfoValue'>$88540</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">فعال: </div>
                        <div className='productInfoValue'>بله</div>
                    </div>
                    <div className='productInfoItem'>
                        <div className="productInfoKey">موجودی: </div>
                        <div className='productInfoValue'>خیر</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="productBottom">
            <form className='productForm'>
                <div className='productFormLeft'>
                    <label>نام محصول</label>
                    <input type="text" placeholder='Dell Laptop' className='productInput' />

                    <label>موجودی</label>
                    <select id="inStock">
                        <option value="Yes" className='option'>بله</option>
                        <option value="No" className='option'>خیر</option>
                    </select>

                    <label>فعال</label>
                    <select id="inStock">
                        <option value="Yes" className='option'>بله</option>
                        <option value="No" className='option'>خیر</option>
                    </select>
                </div>

                <div className='productFormRight'>
                    <div className="productUploader">
                        <img src={process.env.PUBLIC_URL + '/images/asus.jpg'} alt="profile photo" className='productUploaderImg' />
                        <label>
                            <PublishIcon />
                        </label> 
                        <input type="file" style={{display:'none'}} />   
                    </div>
                    <button className='productButton'>آپلود</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Product;
