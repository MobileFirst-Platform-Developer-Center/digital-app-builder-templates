import React from 'react';
import { withRouter } from "react-router-dom";
export class List extends React.Component {
  constructor(props) {
    super(props);
    this.itemList = [
      {
        image: require('../../assets/italy.jpg'),
        heading: 'Cinque Terre',
        subHeading: 'Italy',
        description:
          'The Cinque Terre is a coastal area within Liguria, in the northwest of Italy. It lies west of La Spezia, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore.',
      },
      {
        image: require('../../assets/paris.jpg'),
        heading: 'Paris',
        subHeading: 'France',
        description:
          "Paris is the capital and most populous city of France. The city's top tourist attraction was the Notre Dame Cathedral followed by the Louvre Museum,  Centre Pompidou, Musée d'Orsay, The National Museum of Natural History.",
      },
      {
        image: require('../../assets/madurai.jpg'),
        heading: 'Madurai',
        subHeading: 'India',
        description:
          'Meenakshi Temple (also referred to as Meenakshi Amman or Meenakshi-Sundareshwara Temple), is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva.',
      },
      {
        image: require('../../assets/italy.jpg'),
        heading: 'Cinque Terre',
        subHeading: 'Italy',
        description:
          'The Cinque Terre is a coastal area within Liguria, in the northwest of Italy. It lies west of La Spezia, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore.',
  
      },
      {
        image: require('../../assets/paris.jpg'),
        heading: 'Paris',
        subHeading: 'France',
        description:
          "Paris is the capital and most populous city of France. The city's top tourist attraction was the Notre Dame Cathedral followed by the Louvre Museum,  Centre Pompidou, Musée d'Orsay, The National Museum of Natural History.",
      },
      {
        image: require('../../assets/madurai.jpg'),
        heading: 'Madurai',
        subHeading: 'India',
        description:
          'Meenakshi Temple (also referred to as Meenakshi Amman or Meenakshi-Sundareshwara Temple), is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva.',
      }
    ];
    this.state = {
    };
    this.renderList = this.renderList.bind(this);
  }
 renderList(){
  const renderList = [];
  this.itemList.map((item, index) => {
      renderList.push(
        <div key={index} style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff', width: '30%', marginBottom: '2%'}}>
          <img src={item.image} alt="avtar" width="100%"></img>
          <div style={{ marginLeft: '2%'}}>
          <h2>{item.heading}</h2>
          <h3>{item.subHeading}</h3>
          <h5>{item.description}</h5>
          </div>
        </div>
    )

});
return renderList;
}
  render() {
    return (
    <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <h2 style={{
      fontFamily: 'Roboto Slab',
      color: '#ffffff',
      marginLeft: '1em',
      fontWeight: '400',
      alignSelf: 'center',
      fontSize: '30px',
    }}>Discover</h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    {this.renderList()}
    </div>
    </div>)
  }
}

export default withRouter(List);
