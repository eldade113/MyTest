import React from 'react';
import NoOne from '../Information/NoOne'

import $ from 'jquery';

export default function lstUser(props) {

    let user = []

    if (props.usuario.length > 0) {
        user = props.usuario
        $(".lst1").css("display", "block")
        $(".noOne1").css("display", "none")
    } else {
        $(".lst1").css("display", "none")
        $(".noOne1").css("display", "block")
    }

    return (
        <React.Fragment>
            <div className="lst1">
                <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                    {
                        user.map(u => {
                            return (
                                <li className="list-group-item" key={u.id}>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <img width="42" className="rounded-circle"
                                                    src={u.owner.avatar_url} alt="" />
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">{u.name}</div>
                                                <div className="widget-subheading">{u.owner.login}</div>
                                            </div>
                                            <div className="widget-content-right">
                                                <div className="font-size-xlg text-muted">
                                                    <span>{u.open_issues}</span>
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
            <div className="noOne1">
                <NoOne />
            </div>

        </React.Fragment>
    )
}
