import * as React from 'react';
import  "./Error.css"

function Loading() {
    return (
        <div className='error_page'>
            <img src="https://i.imgur.com/zTM9qyW.png" alt="logo" width="150px" />
            <p>Estamos com problemas para conectar ao servidor.</p>
        </div>
    );
}

export default Loading;