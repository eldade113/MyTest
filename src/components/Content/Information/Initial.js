
import React from 'react'
import{ BsSearch } from 'react-icons/bs';

export default function Initial(props) {

        return (
            <React.Fragment>
                <div className="text-center">
                <BsSearch className="fsize-4"/> &nbsp;&nbsp;
                    <h2 class="text-muted opacity-6 fsize-2">
                        Enter a login, name or company you are looking for.
                    </h2>
                </div>
            </React.Fragment>
        )
    }
