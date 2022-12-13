import * as React from 'react';
import VisitorsMain from './../../organisms/visitors';
import Nav from './../../organisms/nav'




const Visitors = (props) => {
    return(
        <>
        <div className='template__outer'>
            <div className='template__inner'>
                <div className='template__inner__nav'>
                    <Nav/>
                </div>
                <div className='template__inner__main'>
                    <VisitorsMain/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Visitors;