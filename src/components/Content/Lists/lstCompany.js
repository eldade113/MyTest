import React from 'react';
import NoOne from '../Information/NoOne'

import $ from 'jquery';


export default function lstCompany(props) {

    let company = []

    if (props.COmpany.length > 0) {
        company = props.COmpany
        $(".lst2").css("display", "block")
        $(".noOne2").css("display", "none")
    } else {
        $(".lst2").css("display", "none")
        $(".noOne2").css("display", "block")
    }
    return (
        <React.Fragment>
            <div className="lst2">
                <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                    {
                        company.map(u => {
                            return (
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <img width="42" className="rounded-circle"
                                                    src={u.avatar_url} alt="" />
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">{u.login}</div>
                                                <div className="widget-subheading">{u.description}</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">

                                                    <span>{u.id}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="noOne2">
                <NoOne />
            </div>

        </React.Fragment>
    )
}
