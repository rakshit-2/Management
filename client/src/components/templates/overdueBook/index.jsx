import * as React from 'react';
import OverDueMain from './../../organisms/overdueBook';
import Nav from './../../organisms/nav'




const OverDue = (props) => {
    return(
        <>
        <div className='template__outer'>
            <div className='template__inner'>
                <div className='template__inner__nav'>
                    <Nav/>
                </div>
                <div className='template__inner__main'>
                    <OverDueMain/>
                </div>
            </div>
        </div>
        </>
    )
}


export default OverDue;