import React from "react";
import 'whatwg-fetch';
import PageTitle from "../components/pageTitle.js";
// Google maps components
import Map from "../components/googleMaps.js";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mail: '',
      phone: '',
      services: '',
      info: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeServices = this.handleChangeServices.bind(this);
    this.handleChangeInfo = this.handleChangeInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handling input for every entry
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeMail(event) {
    this.setState({mail: event.target.value});
  }
  handleChangePhone(event) {
    this.setState({phone: event.target.value});
  }
  handleChangeServices(event) {
    this.setState({services: event.target.value});
  }
  handleChangeInfo(event) {
    this.setState({info: event.target.value});
  }

  handleSubmit() {
    fetch('http://localhost:3000/sendmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        mail: this.state.mail,
        phone: this.state.phone,
        services: this.state.services,
        info: this.state.info
      })
    })
    console.log(this.state)
  }

  render () {
    const center = {
        lat: 45.254385,
        lng: -74.235201
    }

    const markers = [
        {
            center: {
                lat: 45.254385,
                lng: -74.235201
            }
        }
    ]

    return (
      <div>
        <PageTitle title="Contact"/>

        <div class="mapcontainer">
            <Map center={center} markers={markers}/>
        </div>

        <div class="row">

          <div class="col-md-8 col-sm-8 col-xs-12 form_container">

            <form>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <p> Prénom et nom de famille: </p>
                <input class="input_sm" type="text" value={this.state.name} onChange={this.handleChangeName}/>
                <p> Addresse e-mail: </p>
                <input class="input_sm" type="text" value={this.state.mail} onChange={this.handleChangeMail}/>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <p> Service(s) désirés: </p>
                <input class="input_sm" type="text" value={this.state.services} onChange={this.handleChangeServices}/>
                <p> # de téléphone: </p>
                <input class="input_sm" type="text" value={this.state.phone} onChange={this.handleChangePhone}/>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <p> Information supplémentaire: </p>
                <textarea class="input_la" value={this.state.value} onChange={this.handleChangeInfo}/>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <button onClick={this.handleSubmit} type="button">
                  <p> Envoyer </p>
                </button>
              </div>
            </form>

          </div>


          <div class="col-md-4 col-sm-4 col-xs-12 quickinfocontainer">
            <h1> Contact </h1>
            <p> <i class="fa fa-address-book-o" style={{paddingRight: '10px'}}></i> info@glamextensions.com </p>
            <p> <i class="fa fa-home" style={{paddingRight: '10px'}}></i> 55 Cercle Bernadette McDonald, St-Zotique J0P 1Z0 </p>
            <p> <i class="fa fa-phone" style={{paddingRight: '10px'}}></i> 514-918-3413 </p>
          </div>

        </div>

      </div>
    );
  };
}
