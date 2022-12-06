import * as React from 'react';
import IssuedBookMain from './../../organisms/issuedBook';
import Nav from './../../organisms/nav'



const IssuedBook = (props) => {
    return(
        <>
        <div className='template__outer'>
            <div className='template__inner'>
                <div className='template__inner__nav'>
                    <Nav/>
                </div>
                <div className='template__inner__main'>
                    <IssuedBookMain/>
                </div>
            </div>
        </div>
        </>
    )
}


export default IssuedBook;