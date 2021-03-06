import React from 'react';

function IssueOpened(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
            <path fill="#24292E" d="M12 7c.414 0 .75.336.75.75v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75zM13 16c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
            <path fill="#24292E" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5-9.5-4.253-9.5-9.5z" clip-rule="evenodd" />
        </svg>

    );
}

export default IssueOpened;