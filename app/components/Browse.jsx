
import React from 'react';

import { Link } from 'react-router-dom';
import SelectSearch from 'react-select-search'

import availableParties from '../availableParties';

import * as style from './browse.css'

import { isSmallScreen } from '../utils';

import Select from 'react-select';


const parties = availableParties.map(p => {
    return {
        value: p,
        label: p,
        icon: `//elect.in.th/candidates/statics/party-logos/${p.trim()}.png`
    }
});

class PartyList extends React.Component {
    render() {
        return <div className={style.container}>
            {isSmallScreen() &&
                <div className={style.msgModal}>
                    <div className={style.msgModalBackground} />
                    <div className={style.msgModalText}>
                        งานชิ้นนี้ เหมาะสำหรับใช้บนจอขนาดใหญ่ <br />(ขนาดความกว้าง 1280px ขึ้นไป)
                        <br />
                        <br />
                        ขออภัยในความไม่สะดวก
                        <br />
                        <br />
                        🙇🏻‍🙏🏼🙇🏻‍♀️
                    </div>
                </div>
            }
            <h1>ผู้สมัครส.ส.แต่ละพรรค <br /> มีประวัติเกี่ยวข้องกับธุรกิจอะไรบ้าง</h1>
            <div className={style.selectContainer}>
                <Select
                    className={style.selectElement}
                    classNamePrefix="react-select"
                    options={parties}
                    placeholder="เลือกพรรค"
                    onChange={(opt) => this.props.history.push(`/p/${opt.value}`)}
                    getOptionLabel={({icon, label}) => {
                        return (
                            <div>
                                <img
                                    className={style.partyLogo}
                                    src={icon}
                                /> 
                                <div className={style.partyName}>{label}</div>
                            </div>
                        )
                    }}
                />
            </div>



            {/* <ul className={style.logoContainer}>
                {
                    availableParties.map(p => {
                        p = p.trim();
                        return <li>
                            <Link to={`/p/${p}`}>
                                <img
                                    className={style.partyLogo}
                                    src={}
                                />
                            </Link>
                        </li>
                    })
                }
            </ul> */}
        </div>
    }
}
export default PartyList