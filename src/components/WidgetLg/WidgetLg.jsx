import React from 'react';
import './WidgetLg.css';
import { Transactions } from '../../datas';

const WidgetLg = () => {
    const statusMapping = {
        Approved: 'تأیید شده',
        Pending: 'در انتظار',
        Decline: 'رد شده',
    };

    const Button = ({ type }) => {
        return <button className={'WidgetLgButton ' + type}>{statusMapping[type]}</button>;
    };

    return (
        <div className="WidgetLg">
            <h3 className="WidgetLgTitle">آخرین معاملات</h3>
            <table className="WidgetLgLgTable">
                <thead>
                    <tr className="WidgetLgTr">
                        <th className="WidgetLgTh">کاربر</th>
                        <th className="WidgetLgTh">تاریخ</th>
                        <th className="WidgetLgTh">تعداد</th>
                        <th className="WidgetLgTh">وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    {Transactions.map((transaction) => (
                        <tr className="WidgetLgTr" key={transaction.id}>
                            <td className="WidgetLgUser">
                                <img src={transaction.img} alt="کاربر" className="WidgetLgImg" />
                                <span className="WidgetLgName">{transaction.customer}</span>
                            </td>
                            <td className="WidgetLgDate">{transaction.date}</td>
                            <td className="WidgetLgAmount">{transaction.amount}</td>
                            <td className="WidgetLgStatus">
                                <Button type={transaction.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WidgetLg;

