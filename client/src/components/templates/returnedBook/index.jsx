import * as React from 'react';
import ReturndeBookMain from './../../organisms/returnedBook';
import Nav from './../../organisms/nav'





const ReturnedBook = (props) => {
    return(
        <>
        <div className='template__outer'>
            <div className='template__inner'>
                <div className='template__inner__nav'>
                    <Nav/>
                </div>
                <div className='template__inner__main'>
                    <ReturndeBookMain/>
                </div>
            </div>
        </div>
        </>
    )
}


export default ReturnedBook;