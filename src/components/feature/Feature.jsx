import React, { useState } from 'react';
import "./Feature.css"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Feature = () => {

        
    return (
        <div className="feature">
            <div className='FeatureItem'>
                <span className='Featuretitle'>درآمد</span>
                <div className='FeatureContainer'>
                 <span className='FeatureMoney'>$2,415</span>
                    <span className='FeatureRate'>
                    -11.4  <ArrowDownwardOutlinedIcon className="featureIcon Negative"/>
                    </span>   
                </div>
                <span className='featureSub'> در مقایسه با ماه گذشته</span>
            </div>

            <div className='FeatureItem'>
                <span className='Featuretitle'>فروش</span>
                <div className='FeatureContainer'>
                 <span className='FeatureMoney'>$4,415</span>
                    <span className='FeatureRate'>
                    -1.7  <ArrowDownwardOutlinedIcon className="featureIcon Negative"/>
                    </span>   
                </div>
                <span className='featureSub'> در مقایسه با ماه گذشته</span>
            </div>

            <div className='FeatureItem'>
                <span className='Featuretitle'>هزینه</span>
                <div className='FeatureContainer'>
                 <span className='FeatureMoney'>$2,225</span>
                    <span className='FeatureRate'>
                    +12.5  <ArrowUpwardIcon className="featureIcon"/>
                    </span>   
                </div>
                <span className='featureSub'> در مقایسه با ماه گذشته</span>
            </div>
        </div>
    );
}

export default Feature;
