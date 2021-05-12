import React from 'react';

function BookmarkBorder(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
            <path fill={"currentColor"} d="M19 3H5v18l7-3 7 3V3zm-2 15l-5-2.18L7 18V5h10v13z" />
        </svg>
    );
}

export default BookmarkBorder;

//fill="#757575"