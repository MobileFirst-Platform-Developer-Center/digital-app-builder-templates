import React from 'react';
import { withRouter } from "react-router-dom";
import './landing.css';
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        username: state.username,
        selectedPage: state.selectedPage
    };
  }
export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

  render() {
      console.log(this.props);
    return (
      <React.Fragment>
      <div
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '15%',
          paddingTop: '0.4em',
          paddingBottom: '0.4em',
          backgroundColor: '#091b40',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '80%'
          }}
        >
          <h2
            style={{
              fontFamily: 'Book Antiqua',
              color: '#ffffff',
              marginLeft: '30%',
              fontWeight: '400',
            }}
          >
           <strong style={{ fontWeight: '900', fontSize: '30px'}}><i>{this.props.selectedPage}</i></strong>
          </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginRight: '2em',
              width: '20%',
              justifyContent: 'flex-end'
            }}
          >
              <h2
            style={{
              fontFamily: 'Book Antiqua',
              color: '#ffffff',
              marginLeft: '1em',
              fontWeight: '400',
            }}
          >
           <strong style={{ fontWeight: '900', fontSize: '30px'}}><i>{this.props.username}</i></strong>
          </h2>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Landing));
