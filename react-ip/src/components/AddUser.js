import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../redux/axios/userAxios.js'

class AddUser extends Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
    }
    add(e){
        e.preventDefault();
        let params = {
            data :{
                name : this.refs.name.value,
                email : this.refs.email.value,
                password:this.refs.password.value,
                confirm:this.refs.confirm.value,
                address:this.refs.address.value,
                contact : (this.refs.country.value+this.refs.sim.value+this.refs.contact.value).replace(/\+/g,''),
                nic : this.refs.nic_a.value+this.refs.nic_b.value+this.refs.nic_c.value,        
            }
        }
        // console.log(params)
        this.props.addNewUser(params);
    }
    render(){
        return(
            <div className = "container col-lg-9" >
                <form className="form-horizontal" onSubmit={this.add}>
                    <fieldset>
                        <legend>Add User Manually</legend>
                        <div className="form-group">
                            <label htmlFor="Name" className="col-lg-2 control-label">Name</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" ref="name" id="Name" placeholder="Name" defaultValue="Ahsan"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email" className="col-lg-2 control-label">Email</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" ref="email" id="Email" placeholder="Email" defaultValue="ash@ash.com"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password" className="col-lg-2 control-label" >Password</label>
                            <div className="col-lg-10">
                                <input type="password" className="form-control" ref="password" id="Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" defaultValue="Aamir.wahab1" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ConfirmPassword" className="col-lg-2 control-label">Confirm Password</label>
                            <div className="col-lg-10">
                                <input type="password" className="form-control" ref="confirm" id="ConfirmPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" defaultValue="Aamir.wahab1" placeholder="Re-Enter Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className="col-lg-2 control-label">Address</label>
                            <div className="col-lg-10">
                                <textarea className="form-control" rows="2" ref="address"  required defaultValue="address" id="address"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact" className="col-lg-2 control-label">Contact</label>
                            <div className="col-lg-10 input-group">
                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <div className="col-lg-10">
                                            <select className="form-control" ref="country" id="countryCode">
                                                <option>+92</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                <div className="form-group">
                                        <div className="col-lg-10">
                                            <select className="form-control" ref="sim" id="simCode">
                                                {/*Jazz*/}
                                                <option>300</option>
                                                <option>301</option>
                                                <option>302</option>
                                                <option>303</option>
                                                <option>304</option>
                                                <option>305</option>
                                                <option>306</option>
                                                <option>307</option>
                                                <option>308</option>
                                                {/*Zong*/}
                                                <option>310</option>
                                                <option>311</option>
                                                <option>312</option>
                                                <option>313</option>
                                                <option>314</option>
                                                <option>315</option>
                                                <option>316</option>
                                                <option>317</option>
                                                {/*Warid*/}
                                                <option>320</option>
                                                <option>321</option>
                                                <option>322</option>
                                                <option>323</option>
                                                <option>324</option>
                                                {/*ufone*/}
                                                <option>330</option>
                                                <option>331</option>
                                                <option>332</option>
                                                <option>333</option>
                                                <option>334</option>
                                                <option>335</option>
                                                <option>336</option>
                                                {/*Telenor*/}
                                                <option>340</option>
                                                <option>341</option>
                                                <option>342</option>
                                                <option>343</option>
                                                <option>344</option>
                                                <option>345</option>
                                                <option>346</option>
                                                <option>347</option>
                                                <option>348</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <input type="number" className="form-control" ref="contact" defaultValue="2074268" id="contact" placeholder="xxxxxxx"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" className="col-lg-2 control-label">NIC #</label>
                            <div className="col-lg-10">
                                <div className="input-group">
                                    <div className="col-lg-3">
                                        <input type="number" className="form-control" ref="nic_a" required pattern="\d{5}" title="Five Digits" defaultValue="42301" placeholder="xxxxx"/> <span> - </span>
                                    </div>
                                    <div className="col-lg-4">
                                        <input type="number" className="form-control" ref="nic_b" required pattern="\d{7}" title="Seven Digits" defaultValue="0867367" placeholder="xxxxxxx"/> <span> - </span>
                                    </div>
                                    <div className="col-lg-1">
                                        <input type="number" className="form-control" ref="nic_c" required pattern="\d{1}" title="Only One Digits" defaultValue="1" placeholder="x"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" >Add User</button>
                        </div>
                        </div>
                    </fieldset>
                    </form>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{

    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addNewUser :(params)=> dispatch(addUser(params))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);