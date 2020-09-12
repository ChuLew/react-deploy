import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mitch Lew</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEbqsrvlbapTQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=D_esnjUgtmntXAOLPe3GSsAiuVuKsM94HzJyPi5Gehs"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi my name is Mitch Lew, I am currently working as Software Engineer At Lockheed Martin. I have experience in Java, C++, C ,Python, Javascript React, JSX, HTML, CSS, MYSQL. Currently I work with Java, C++, XML SQL technologies as well as Software Versioning tools. I am currently learning JavaScript and React and REST technologies like Spring. Feel free to look at my Projects as I have live demo's available.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (732) 447-4153
                  </ListItemContent>
                </ListItem>

              

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mitchginlew@gmail.com
                  </ListItemContent>
                </ListItem>



              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
