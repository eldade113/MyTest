import React from 'react';
import LstCompany from './lstCompany'
import LstUser from './lstUser'


export default function Container(props) {

    let company = []

    if (props.COmpany.length > 0) {
        company = props.COmpany
    }

    let user = []
    if (props.usuario.length > 0) {
        user = props.usuario
    }


    return (
        <React.Fragment>
            <div className="mb-3 card">
                <div className="card-header-tab card-header">

                    <ul class="nav">
                        <li className="nav-item"><a data-toggle="tab" href="#tab-eg5-0" className="active nav-link"> USERS ({user.length})</a></li>
                        <li className="nav-item"><a data-toggle="tab" href="#tab-eg5-1" className="nav-link">COMPANIES ({company.length})</a></li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content">

                        <div className="tab-pane  fade show active" id="tab-eg5-0">
                            <div className="row">
                                <div className="col-md-3 col-lg-4  text-left">
                                    <h6 className="text-uppercase font-size-md font-weight-normal ">
                                        USER</h6>
                                </div>
                                <div className="col-md-3 col-lg-8  text-right">
                                    <h6
                                        className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal ">
                                        CONTRIBUTIONS</h6>
                                </div>
                            </div>
                            <div className="scroll-area-sm">
                                <div className="scrollbar-container">
                                <LstUser usuario={user} />
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane" id="tab-eg5-1">
                            <div className="row">
                                <div className="col-md-3 col-lg-4  text-left">
                                    <h6 className="text-uppercase font-size-md font-weight-normal ">
                                        COMPANY</h6>
                                </div>
                                <div className="col-md-3 col-lg-8  text-right">
                                    <h6
                                        className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal ">
                                        PEOPLE</h6>
                                </div>
                            </div>
                            <div className="scroll-area-sm">
                                <div className="scrollbar-container">
                                <LstCompany COmpany = {company}/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
