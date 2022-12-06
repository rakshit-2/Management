import './index.css';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons'
import navData from '../../assets/static/navData';

const Nav = (props) => {



    return(
        <>
        <div className='nav__outer'>
            <div className='nav__inner'>
                <div className='nav__inner__top'>
                    <div className='nav__inner__top__logo'>
                        <FontAwesomeIcon icon={faWandSparkles} size="2x" color="white" style={{cursor:"pointer"}}/>
                    </div>
                    {
                        navData.map((ele)=>{
                            const{id,icon,link}=ele;
                            return(
                                <>
                                <div key={id} className='nav__inner__top__each'>
                                    <FontAwesomeIcon icon={icon} size="lg" color="white" style={{cursor:"pointer"}}/>
                                </div>
                                </>
                            )
                        })
                    }
                    
                </div>
                <div className='nav__inner__bottom'>
                    <FontAwesomeIcon icon={faEllipsis} size="2x" color="white" style={{cursor:"pointer"}}/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Nav;