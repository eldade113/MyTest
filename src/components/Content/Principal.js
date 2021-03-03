import React, { useState, useEffect } from 'react'
import Title from './Title/Title'
import ContainerList from './Lists/Container'
import Initial from './Information/Initial'
import NoOne from './Information/NoOne'
import axios from 'axios'

import { BsSearch } from 'react-icons/bs';

import { FiltroUser, FiltroCompany } from '../Adicionais/Filtros';

import $ from 'jquery';

let writed = ""
const api = {
    baseUrl: "https://api.github.com",
    client_id: "a2a58519bc365d25a8ce",
    client_secret: "8ef87d05b2aee0e1d1ad712d4f3d9008a84feff3"
}

export default function Principal(props) {

    const [githubData, setgithubData] = useState([])
    const [githubDataCompany, setgithubDataCompany] = useState([])

    useEffect(() => {
        fetchUserGit()
        fetchCompanyGit()
        ContentControler()
    });

    function fetchCompanyGit() {
        axios
            .get("https://api.github.com/organizations")
            .then((data) => {
                setgithubDataCompany(data.data)
            })
            .catch((errror) => {
                // error handling (you cannot access the response body) 
            });

    }
    function fetchUserGit() {
        axios
            .get(
                api.baseUrl +
                "/search/repositories?q=language:Java&sort=starts&page=1&" +
                api.client_id +
                "&" +
                api.client_secret
            )
            .then((res) => {
                setgithubData(res.data.items)
            })
            .catch((errror) => {
                // error handling (you cannot access the response body) 
            });

    }

    const GetText = (e, name) => {
        const val = (e.target && e.target.value) || '';
        writed = val;
        fetchUserGit()
        fetchCompanyGit()
        ContentControler()
    }

    function ContentControler() {
        if (writed === "") {
            $(".initialInfo").css("display", "block")
            $(".NoOneInfo").css("display", "none")
            $(".lists").css("display", "none")
        }
        else if (!Ifinded()) {
            $(".NoOneInfo").css("display", "block")
            $(".initialInfo").css("display", "none")
            $(".lists").css("display", "none")
        }
        else if (Ifinded()) {
            $(".lists").css("display", "block")
            $(".initialInfo").css("display", "none")
            $(".NoOneInfo").css("display", "none")
        }
    }
    const Ifinded = () => {
        return ((FiltroUser(githubData, writed).length > 0) || (FiltroCompany(githubDataCompany, writed).length > 0))
    }

    return (
        <React.Fragment>

            <Title />
            <div className="row">
                <div className="col-lg-2 col-md-3"></div>

                <div className="col-md-4 col-lg-8">
                    <div className="mb-3">
                        <div className="input-group">

                            <input type="text" className="form-control" id="name"
                                name="nameApp" placeholder="Type a user name here"
                                onChange={GetText} />

                            <div className="input-group-prepend">
                                <span className="btn-icon-wrapper input-group-text" >
                                    <i> <BsSearch /></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3"></div>
            </div>
            <div className="row ">
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-8 col-md-8 ">
                    <div className="lists">
                        <ContainerList usuario={FiltroUser(githubData, writed)}
                            COmpany={FiltroCompany(githubDataCompany, writed)} />
                    </div>
                </div>
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-12 col-md-12 initialInfo">
                    <Initial />
                </div>
                <div className="col-lg-12 col-md-12 NoOneInfo">
                    <NoOne />
                </div>

            </div>

        </React.Fragment>
    )
}