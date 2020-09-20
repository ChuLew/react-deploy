import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#f5f5f5",
                height: "176px",
                background:
                  "url(https://images.vat19.com/photoPop/photoPop-pop-up-album-open.jpg) center / cover",
              }}
            >
              '' Photo Album{" "}
            </CardTitle>
            <CardText>
              REST basedReact Application utilizing that communicates with
              SpringBoot connectd to MySQL database. Utilize Google Auth Api,
              Unsplash picture Search Api, React Redux, React-thunk Middle
              ware,Deployed on Amazon EC2 instance for demo. Use of foriegn keys
              in database to maintain data integrity as well as correctly query
              specific albums based on album id
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ChuLew/StreamDB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                {" "}
                <a
                  href="http://ec2-18-221-166-212.us-east-2.compute.amazonaws.com:8080"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
             Stock Market Trading Application
            </CardTitle>
            <CardText>
             Stock Market Trading application. React Javascript, SpringBoot, MYSQL, 
             Plots, list, shows historic data on stocks. buy stocks on certain dates and see how much gain/loss stock has had since acquisition date along with stats. Watch videos on your stock
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ChuLew/stockMarket"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="http://ec2-3-18-108-25.us-east-2.compute.amazonaws.com:8080/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                height: "176px",
                background:
                  "url(https://cdn.shopify.com/s/files/1/1799/1559/products/expense_tracker_2000x.jpg?v=1533441424) center / cover",
              }}
            >
              Expense Tracker
            </CardTitle>
            <CardText>
              REST based Expense tracker application. Leveraged online tutorials
              to familiarize myself with React. Added SpringBoot MYSQL backend
              to learn SpringBoot Use of GET, POST, PUT, DELETE methods in
              Spring Application. Leveraged MYSQL workbench to set up queries in
              database.Hosted on amazon Ec2 Instance via jar
            </CardText>
            {/* */}
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/ChuLew/goalapp/blob/master/src/Expenses.js "
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="
                  http://ec2-18-218-194-75.us-east-2.compute.amazonaws.com:8080/ "
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  height: "176px",
                  background:
                    "url(https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_700/https://www.timeatlas.com/wp-content/uploads/excel-filter-by-color.jpg) center / cover",
                }}
              >
                <p>CSV file sorter Mutltithread C application</p>
              </CardTitle>
              <CardText>
                Developed a web server which could accept and handle remote
                client requests utilizing multithreading and socket technology •
                Recursively traversed file directories for CSV files and perform
                sorting algorithms to sort based on user inputted arguments •
                Dynamically allocated/deallocated memory to store varying sized
                CSV files that were merged and then sorted • Prevented race
                conditions and data corruption by implementing synchronous code
                utilizing mutex/semaphore locks{" "}
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/ChuLew/Systems-Programing-/tree/master/Project3"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  height: "176px",
                  background:
                    "url(data:image/png;base64,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) center / cover",
                }}
              >
                <p>Operating Systems projects</p>
              </CardTitle>
              <CardText>
                File directory for more Project from CourseWork In college. Operating Systems class in C language
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/ChuLew/Computer-Systems"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#ff6347",
                  height: "176px",
                  background:
                    "url(https://icons-for-free.com/iconfiles/png/512/camera-131965017355314519.png) center / cover",
                }}
              >
                Java FX object oriented Application
              </CardTitle>
              <CardText>
                • Created application that implements photo album functionality
                such as adding, deleting, moving photos and albums • Utilized
                object oriented principles and data structures to query photo
                albums across multiple users • Developed photo filtering system
                which allows user to create albums dynamically via photo tags
                and dates
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/ChuLew/photolibrary/tree/master/Photo65/src/photo65/view"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#ff6347",
                  height: "176px",
                  background:
                    "url(https://image.flaticon.com/icons/png/512/14/14415.png) center / cover",
                }}
              >
                Android object oriented Application
              </CardTitle>
              <CardText>
                Android application Utilizing object oriented principles
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/ChuLew/Android-Photo-Library/tree/master/app/src/main/java/com/example/photoalbum65"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#ff6347",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Python Aritificial Intellegence Search Alogorithms
              </CardTitle>
              <CardText>
                Python Application that Utilized various Searching algorithms to solve N-queens game> Searching algorithms include Breadth First Search, Depth First Search, A*, Uniform Cost Search
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/ChuLew/Aritificial-Intellegence-/tree/master/mp2/xyz007"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#ff6347",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEBAVFRUWFxUVFRUVFxUVFRUWFRUWFxcVFRYYHSggGBolGxcYITEhJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGxAQGy8lHyUtLS0tLy0tLy0tLS0tLS0tLSstLS8vLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEMQAAIBAgQDBQQGCQQBBAMAAAECEQADBBIhMQVBUQYTImFxMoGRsUJScqHB0RQjM2KSotLh8AdTgrJzJKPD0xVjg//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EADQRAAICAQIEBAUEAgICAwAAAAABAhEDITEEEkFRImFx8BOBkaHhMrHB0ULxFFIFIzNisv/aAAwDAQACEQMRAD8A8arU5xUAIUAFQIVMB6AFQIemA9AhwKYBgUybCApiskQVSJbCinRNjxQhWT24NbxdmbVE62GYHKpMbwCY9aqtDN5Ip6sysRvXHk3O2GxDWZrYqBWHaGvub/qaEJgUDsVFBY1FDsK2NR6j50CFdGp9T86TGgKQCoAUUDHYben4mmxLqNFAxooAagB6YDUgFQA1MBxQIKgBUCFTAegAgKdCbCy06JsdRToTYYWmKy/w/hr3vZEKNC52HkPrHyHUbTQZzyRgrZpW7di25ttYfwqzM76OcqltEIEDTTUU2mZKbmuaLXvzEMVgv9p/4U/qo5X3F/7PI0eG3cKQxGHDRAh7RfedgkxtVUzKXPd396Hv2sLqzW8o/wDDcVR8Vp0319/UIvIlW/zN/gHELeES6qWVeV1UiGE6TrHQwfI71pGVKpHDxXDzyyU1WzWqur6r/wCyMbhFtL7sjcNsktmySjg5twphgdTpNarDjlq0zqnlyYoRUZXVJ9/9ifs5ghbS7jbN7CNc1W3ZZpC8mdb+aCfqztG21ZrhYzVxderN5cXOE+RLm79P9k+F/wBPcJiM36NiL7ADMCyqwK9fCo/sZFKXCKKTcjN/+RlzcvJ56Xt9zOfsBck9zeD6NAK67Ea92Wb35RUy4SUev8GmP/yWHItPfy0Oc4r2fxWG1vWWC7Z18Vv3sPZPk0GsJ45Q3R2Y82PJ+h3+/wBDNioNRqADte0PUfOgBXh4m9T86QARQMaKQCigArnL0/E02JdQKQxUDFQAiNKBA0DHoAamIcUAPQIemA9ACFMRIoqkQze7O9lsRj8xs5QqEB3cwqzzMCtFCzlz8VHC6ab66dFdW+ytmo3Z/DCwqZbn6QGPeXFI7srr4VBnbrGsUnSRlHLkeTm/x6L6eW+96voU34NatjOwdgPollRSToMzGIFTqbfEb0LnZ7G3FxKXXOHyptbN6xbRREeEFq0h4XZy8Xi+Lj5I3b12bTrv5Mtdq+MNiMR3ttLCwMsi5ZbeZ9l4jXaqnrSI4PE4Rk5aNu6SaS9EQ8LBuOgv+FRci4baBoUqCNgRHnSilepedyUG4blftBw1BiLgwqXGtTKko3PeNNqppBgnNwufd+Trpa6OguEcCNy3iGdu7KWwVVlabhzBoXTfw/fVJIWbPKDikrv8L+b1rRMs4fEWrYxBbOXDg24ICrLw8zqCdPIxqDVpLQmXxG1W3U0uD8JXH3Is5kvQWD/RIj6QOx8wY9Nq6G1iXP0Mbm38NJO+hDxjiYtXmjvbrJ4f1rsLfh0nu1Os76t7qqa60VgjcEk9H16ljhPb7EWVKBbSgzGS2igT+6IBrF4sc/1fubpTg/C/XzHw3aB7jfrThXmTnVO6uDTnp8jVxTj/AL/sxyY1JVqvVJr7GwhxtzxWCl1YjI/dXEy8wHUi6vvJHlUZIRWqlXqLC/8AGUduqdNfU5rtD2Du3k/SMLhxbua95hke3dDEa57Btk/wEDyriyY6d/g9LDxEXUbvz6/M4DE4a5aOW7bdD0dWQ/BgKxo61rsDZ9oeo+dAxXx4m9T86QEdIBUUAqBhXPo+n4mhiXUCKQxqAFQA/wDf8KAGpDGpiFFMB6BD0APTEIUwJESdBzppEtnbcH7K2cPN3iwa3bKhrYBIzncqSuoMbVusdav377HkZeOlkajgvvtv2q9Kf/bWuzKFjiuFUullL1tbnhKqxAI2Gb9ZUc0ldHVLh+ZJ5KbX7/Qzmu4cEj9F2JH7V+XupI3fN/2+xYwt7D5oFs2iQQLgc3In6yMIZTsR0pkO+9l7hvA+/wAQuHy5GfUN3o7uInMhKElekk+dUlZhmzrHDm80u27rV7LzZX4rw4WHKc1d0PiDA5QhBBCj61VVOicWZZIKa6kuDQXFuG5etoyKCoe0rG4dBlBCkyBVJEzm00krvzenvfpt3pE2DwHfAjwtBBm3bIIiZBi2NDI+FNJ9CcuaGP8AU69WR3sJaERmaSV0GsrlnRgPrCq1Gp6WTpgzZLB1IBQEZ15ssiRB2YgbcqfKyY5YzVxd+h0GEv27E4m0WS3lCJk9pmO8aARyk9DXUl4aZwvmlLk623f8X70+phX1w19yVvOjmZW6uYN6MrDXyI9/Kpl4nozuxqWOKTX0KN7CW7erFyNv2bLy83/Cs+RrVm6nei39Sql1QTC8m3J6HzqW+xaT6kuC4tcsmU08pYg+6accjRM8MJrU6rA8QTG62/1OKQM6kEhLhUAyY0DaDXTbWrU3VL6HJLF8N3LVd+q99zpLmHONQsz2kuwO/wAPc/W2n5Em0JyNP0l9d6ylHlqLVr31CGXed1XVXr8q/wB7qjh+0fYm5YZLuGtJctMQCFuljbffL4iGYHcaT18+WeJqVJM9HBxcMkOZyXqtvx6M4/F+F2VrMEMZDZwRrzBNY0dZF3i/7Y+LfnQA3eL/ALY+LfnQA3eL/tj4t+dIArrr4fAPZ6t1PnQJEWYfVHxP50h0+4xI+qPv/OgdPuNI6fOgKfcROm3Xr5UBWo3upDBFAx6BMQqhBUAKmINRTJZIjEEEbjWqRLVqjp+O8exOLt27F85nUjKijVYB9v8AeM+zyjWNqtzs4sHCwxS5k26VK3suy8hY+zw9bGHGHLHEhh32pKecHY68xVSS5dCMcs/xZc/6de3yrrtvfXYyS5VnhVMsdWRXiCdswMVC2Op6ly5h0IztI8NrRFUSXViTGgHs8utNIycnt6mlhBkRScxRSrAnLntSfC6hWJyEiCpj506M3TE2DZTCOhVjmBdc48USQ2UyNB+XM1F9yZS02DvYB1173DtPJUkj/wBqrI+Jto/fzN3svxg4RXDIjZhAhIiR5KNfOqT06nHxOCWSfNGtmtVe/VefmZ9lwLovMdRcZ4CsR4sumsR7NPn1ui5YLw/CvpRodp+MLiyCEAAABGQgaR09KcXWlMnFhlCTm6t1+lUtNNjmOJ3HW2tvPKySBrtsOXrWmR1E6cEYublWplC+Do/uYb+/rWSyJ6SOzka1iWbeGZ1hDmHkdvUVssblGouzJ5Ixdy0JLGDRSc/eEw3sgAbHmZ+VHwUt7F8WT2r5gGxZ5M6/+QBh8U1HwqOWvyaKT6/YcW2skMNJBAYGVIOhgimvC7B+NUza4XjDeIy3Ml8CEacufyDfRb10PODrVXrcfmu5hKKjHlmvD37fj9jouFdppZrOLXxGEvJcRUblDnqQYM/mKnwSWmjWxzy4eeObyQ1i9/fl0+hm9puCnEs2HKgXkRruGuAa3UUFmst1EAkEbQORIrLPFTXMtzr4Sbxuuj+349+nmYriPUGIoAapGSXtl+z+LUCRDSGPQMakAjt8fwoDqNQAhQMVNEsemA4piDAp0S2X+DcLuYq8lm1GZzALaKPMnpVxjZjmzRxR5peS+uhu2uzr2sVbsOO6uZlAfv1EMPpqMgYaiQNxVKPio5XxcXhlkXTdNVXk/TqBxPhYw1+7hlhsq6tbcTc28IYghRBJIA1iiS5SsWd5Yc/nXdaPdd/JkAwBRO+OHuhFcLmNxIzxmC/s52FOrQ3k8XLav0/J03YnAYa+rfpN42/2jKAxUEmNdCJ2FXCKrazg47NOEkk+VU9eXm1Wyrz7gcJS3ZxWa6mawr6FzLXCJCklvImNh4tJNNUpMnOsmbh46eLS1tp1V9LJ+0uNtPiv/T28oIIUEeFyT4rR6g6DXZo21olqHCweOEuZUrtK7pepQxGBa2Avd3MpllGcIy5olGBB2I386dVuaxyrIrhJNFrgZtW7hOIs3GXKYHeK2saaACqVGWdZJJcr+9dNNdeupnth7pYlQwEmBm2E6c6pUXbUVb1LeS4FAhpA1juz75OtOkClqRAXSfDMjr3I+dC01G6ej6mdxPG3Qdgp/dCSPQiSPcacsjq0a4sa2ZRt4i630mPlJM+7nUpuW5vUY7FlLiROVQ412yh/IgaA+kTWqqOyIpyu2FhuJkyMls6GAUXXTYHealTUtBPHSQHcWL/7P9Tc6SSk9DOqg9R7xUqCn+nRlucsf6tV9/yQ4K73bm1fU5CctxTuh2zj95d/OI51mm3ozZ7XE3u1PDsFh7VoYe4WvDS6OQI2I8jvW72br0OLDLI51K61u1Vdq76FbGXmxVlL0HvsPlDsN3sMwALdSjEDzV9dqzyr/M2wRjBvGtun9HVf6e8SXEOtq5HeWHa5aJ5IQy3EU8l1By+tRNtwb8qf8MmUHHJHlfX+Ha/n69zi+0PBVuNcu4ZcrAs1yz5TOe11HMr8OlTm4Zx1iacNxfNUZ9dn/DOVrkPQGIoAO/sv2R82pAQ0DGpDQ5oAR2+P4UC6g0hiFAx6olj0CCWmJhiqJNXgWJvYd1xFkqCpIBZ0USACRDEE6EbVcXRz58UcseSV9HpuuzL/ABXjDYq6bmJuW3OghFcsPst4f+xGu1NuyMWH4UWlbb1bb39+gBw2DEZrzgkK0EEkZlDCSFImCOdA/H0QS2cFt37fwt/RVWS+fsSnHIvhw9qSoMOQSRzLKDt1k+kRQkTLT9TKtvEElu8JbMIJnUeIEROkeWm/KmkDO4wvAbljCriu9DgQwVokZRIjeIHqBrG81qoq/Pc8nJxLncZR8Dbhvrdduxm8W4ocXc7121gDRxb26rB+ZoXY6MePkvW292/p08iFLayBLeIhcwfMAx2nT/INaKhSk0rZq4XhbZrlt3Ae3mJPeQpyhDCkAyfFTs5Z5kkn7/fXyrchcMFXKYJLEye8EaAQQpjY0XqapWTcPwC3LsXXIEDxRA22ggbR05VfNS2MskpJpJpW930K97hmHe4bYNptY52n1+qQApPxqlGMt0a48+VRv399TrezfYGzlzOTB6gZh+HvrDJxaxeGC1NsXDZuL8Tk4r7lTtt2Mtoue3vqZ2mBJB84B1q8GdZ9GtRZYT4OaUpXF7Pr6HllywAxlsu/KT7h/eonCm9TvjO0tBBPp2rgZlEsrLlJHMgSQwjcTPlWTf8AkmapdGi7/wDlLV4AXLYRxAF1QG0HJg2sDkQZHntWqyKT1Wvcw+DKH6Xa7EXEPEVIOY5FBPUqMvyAq5RrYqE29zqf9OcLbvXWS4QFZHttPR0Iom38JtK9v3ObK6zQTdK3r8mHi7acJ4h4QSrBlB28NzTMDsYmpuE4p/Yr/wBsoyTeqtJ9/P6EmNx9oL3yWdLdwI8ftLO8ZiPomNG2Na/EWzZww4TJqk9Ht19Pe5xXbTAJZxM2/YvW0vrAgDPIYD/kp0868zLFKbR7vCTlLDFy3ME1mdKDxA9j7A+ZoGQUgGoBCpDH5fH8KBdRqQxhTAcUxD0xBrTJZPhrJdlQbsQB6kxVxVszyTUIuT6Hcdp+z72Ew4xGRlFsIncoReI1I2lXO8lq0ktNOmh5vC5+aTVU5JS3TVPbbb9/oYNnCOFHfsi2x7IuauFkk92FOYaknLI1J0NRR2tr/Esrdw40GKeAABpe0A0FOn3Mmpdv2La2V/3buvVL4HxJgDzNGvcin2/YjwPGu6JNu5cBZShkZpVtCNbtUr7k5MSkqaBGFtghXU2yRKm6lxVPqVdiB5xVcrW5PxVJXF33ot4u/iLVvunH6s+wyuXtnUHwsGKtpy5TVpvuc/wcLyc6S5uvckw9zDNaRDabvc5zXMwAynYQQdq0Rm1NTbb09/nr120LWEw6r7WoYkGGU+HSDpOs6+6qSInko3eC8LS6RacqoEsH1GYMBvryiPfQ3SurOPLJ88Y8yin1ey0KPELIt3Mi3BA65j+Bq0kPBllLHzMZ8GpKgIIcjaQJ5EEER7VVy2X8VpW/f1KuL4AQ5Np9jBDEHY8nGnxA9aaTWp0w4iEo09zt+y/aUWF7m+rLHXlWPE8L8Z88Nx8Jxj4S4tXBu9Oha7T8Vs4myy221Anpptz5a78uemtRwuCeGVyRpxXF4uLrlvR37X89Ox4lxTBPbdpB0mZEEeTCdPXajNFp2d+GalGkULdyCCCdNRpzHvrBM3aCOWTBI8oGnlvVadBalyxGniP8I/qreLZjJI1HPcpbKlhnYsSB0gAb6DUn31rJuC0MIpZZNPWiaxxhXm1iM1y2SdCBmU/XttPhbz585qLWTf6h8F4nzY9PLoyzxRHw1xcXZuB1ZctwQCtxNouIT0gEawcp51lki+b39S+Hmpx5e328vkTf6mcFQWsPiLQItovcuAC2QliyzJ0XMWX1jrXHlvm8W52cK4uHhf8AvqeeZU+s38I/qqDpJMQqeHxH2R9EdT+9SGQMq/WP8P8AegACF6n4f3pANA6/d/egLYiBG/M/hQGtjUDBoQBCmIcU0IMVRB0HYrFWrWLtNeXMsx1gnQGtcb1OHj4Slh02TTa7pbr5nbdvcNiC6shNq0wkKozOZM6TAA8wRtVzulrdafM8/wD8e8acvBy8z5kn/wBXtXkcett7lt7NrDrccuHN0N3t9YBBBIiFPp95FTG3ojvyyjjksk50tq2Xv+kXeK8HsYdbJw19bt11l5iLJG7RyjqdvWCKlFIx4biJ5ZNSVL0fnprvpra01M3DLcZsuHVnOpZguZ36ttIXy9510CSb2N8mSEFc3SJbbYgQScvTPlWfQNq3umgHTRs8a4hdxZtnEESi5AFAtAaaZmuarOXSV1quZPY5MWBYtm3svktlp2+vcl7L8Pa/ce0uS1C5mFyTmA2DAkA+4CrjTVmfE5vhU9Ne7pbXv+3mRNYtZiD4SCQcj2ypg7+I6elPW6K5lKKfc0reGthZ7xfTvbJPwBmrTZySS/VT+hawt0IPCWInqpgn0NPVsyny1qiTvVmYb7vzq0mZua5aJc8RlBYiNMyAKDBliTppyo8hJKTt6I0rVnAmA+IdH3hQdSPqmDJ9KbnmWiimaYcWGS5pS+i/2Tl+Gt4e8u3DEAQozeXiUfdQv+T2S9+pu48LHxc0m/L+bRUxXZ2zcRb+CvFDbOtu7qNRBUtGgI6ggg1MsuRS5Mi+aOiDwcnxIvTrfT6GNx7hncB1xHgkxh3MMWSJZTBOZVBAnz860jkhkjV+pChlxzUorTr+DjL3BA3is3bXmpcCD5E8vI1zS4d34HZ6K4pLSaa+RXv8FxCeLu8wIkFWVx5iVJ2NZyhKL2NYZYTWjNTCYC8FUGyqn67Oub3Lm/CurHbS0OTLOCk7l8hnwVwXDbDBnQyFB1YRmaOpAG2+9OTpbjg06aWjKi2S7HTmdqUY8xUpKKNgJkwxTEAlLphI0ZY9q4k9NB0MkU5x5vCYwl4+eP8Asv8AZviRt3Xw+JIe1e/V3AdVJI8LwZgMCD/y8q5skeePmjqhJQdr9L9/VHF9rODfoeIa2B4ZOX3bgeUEEeTCuSSW62Z245N6PdGXiPo/ZH41BoQGkANAxqQBHYep/CgYFIBU0DCFMQ4pkkgqiS3w20Xu20VwhZlAZjCqSdCTyFVHcyytKDbVnS9oTjLzd1iMRbbuiVHtgGNJ9jUVcpvY4uGxYsa54J6rq7pdlrsScGx93Bsby30V4yM4R7gZTp4xAhv3p1566kUvIrLijkrdVtTS6U/sZWK8c5LikMSzMZtm40ySc4AgE6KCevoXrbNI1Fcq6fYtcCxuKwjm5hiMxUqcpS5od9FJpqSMs2KORLmtV8ulP6omXhWJVWvNZfMxkN4YEyWbec20dNTuBVNWR8XHSSemxf4R2exF+2TbtgZUYNpBPjzeLSToBqfKmlfXqc+fio45VTfV0rpd32QWN4LisILYuLmDiVAJ0B6Ear8us1dJapix545enRPXqns/saNnApbVRGu51kyeUxrFStdxyJ0srVpGUvUsJZWrWhzzQdrDJ0+dXZhN9mXAEA1BjyE1aRzW+YsYW+p8Cpcua+ywCMB1tGIzjoxAO01nl50uZJaHfw8IOVSk9fTTz6keKAW4Tdt22Av92fCA0AB85IgglCD6mqxT5o+HR0dGfC8cvFK1p720OVxXae/ad7SBbQV2UqgmcpIhi8lh741qk4yrm1N/gpW49fuB2nuWr1wd414MqQIIdVkkwEYgjkdDUvGr03HgnPkqlVuunUrcF7PWr7hQ1w6jU5U35R4j99UsSS5myM/FzhSS1fvyNztT2P8A0S2CIy6nUzrpO+3L4UsOSGVPl6Cm82LIo5VvtRzFrFmzpbETAJ2MnZQeR1meVVz1tt+5vLFzVzb7+hDbRlxIKEjKyweeZI195E++pUbkW5L4Z6LwLsul26zQAp8cDkG1yjyBke6py5lhh5nDijPi8vLdKrYPbXgkNmiFChUjYAcvjJ99TwuRTj59SuJU+Hzcv+PQ4XEWvCLmpyTbbzDAlJ+yQ2voKqcammdeOdxcfmiXtyWvYLDYhh4s5ts3UKpgnzMa+grhzpRk4r1+p28M3JW/T6f7OIxH0fsj8awOshNIAaBjGkAR2HqfwoH1ApAKmgYQpiHFNCDFMglRtjVolo9Ft8JwmIwrY1u6tSQTatqhyge1BYSSddzua35Uzw5cTmxzeNNNp0k7t3132XtnKXrCE4hsOrmyCMhYahc4IzRtpUV2PR+JXKptKT6ANxW93SWSwa1bLFEZVIBYy0GJ19ZoGsUVJy6sv2MLad3thUlA5JaUBFveC17foKEmZznypPv2JcDhLVxwotJ5kNMD0F4ny250xSk0vf8ARq8B7RjBM1sIxt5iGUPBYTG8c4rWL01OHieF+K+ZNp1TptWuzJcAHvHv77MVEm0rGconQ6/d6T0pSlZePDDEqivUlx9xMw7xgDExlDQDtupj7qI30CVE2Awnehmt+ILqxCLoP4a08RzZMkIb+/wELlsfS/kH9NWlIzkluWLLJyP8o/pp6mE0WwwG3SdQsfeKpWcrWpzfaS00d5y55csA8icugn/NxRPTY9jhJXozb7NXmREQr3huNbfIdywXu7i+RCsGJ5GZ3qae7dae/wBjXI4z8K6Ovf1+xW4vwnDymMDO1tl9khR+stHIUcz7XhXQDXUzFOFybsqUpQSjH69ve/Tc55ne67OYkySToAPXoBA91arux6Jcq+Re4Pe7t1cNtLKuxcTGaT7OoIjeBtTjbsy4mKcK92X+1Pae5dWL2/IcgPx9PjWajDCmohjx5M01kySvsu34OEa+XaTtO34nzrnUuZ+R6nLyrzNfhl8K4z6qYk8/Ij0rpi6epx5oOUfDuep9nOMIj5T9IIunkoE+lY8Vgc4WulnDwXEvBntrR0vStBu0vFbd9cqtDCcuaAreU8jUcPgli1ZpxfFw4tqrVfR/yjzHFtcRHjMrC5biNCG8eh901rk1qjsxJJ0+39G92usA4BbZgP3feFQI/WIFuOQOUiRA66VxzTkpN9DTDNRyxUdndrzdfg8xxH0fsrXOeoQmpAGgY1ABch6n8KQAUhiFMBxTEOKaESA0yWGtUiS1h7rEd3nyozKTOwIkBjGsAMdqpMzlFXzVqd1h+EcTwWGu2R3Jt3h4iCW02JU5a1SaR5OTLgy5IuVq66KpU7Wuuz7PyZzlng15WDBklSCNTuDI5VK0O2WSEk0+pax+AxF+41261su5liNBO2wWBT3Ig4Qjyos8H4e9l8zFYgjwyTqR5eVATkmiTDcHLXS1wjJLMQCZOsgHTQa607IclWhr4nExBAkkxbUwAT9YzACjckxHluUlZDLfZJ8ObVx8ShZ2zQxjU6fd6V0dqPM4uMnN6N6eGnVS7vyK2Ev3bJuC0HRHmfEpkQYGUCelO0ypYeaPi3qnrv5PurIwAYDEgFvpTtA61sq6ESclE3eKYO1aFru7macsjXSeX96zt09KOSEuZrxc1q3pXK+3n6lUKWG0aDmBrHMETVRlFPcpx1FgeFIz5WYEN78pOmbz/tTlLSzrx5dlsdfh+zlnDILubW2p8R5AyWPlMx6dTXH/AMh5JctbnpT4Rwxc/Np7/fb8nAcX4t3wCJbW1hrUgFjqzHc6bsegkxXfBcluW790jCUeakt/er9+Rgs73jlRCqfRHXozH018qlz5mbxgoLfXuNeurbeBBYDKokeEAQC373OOp1pcyWiKUW1b2M6xNxiHIIIYrLDRgCRz5kQfWs023TNZVFWvmR2GUH9mnvcfgRSjNdipRk1+r7Fi6794JK5ZBUKUUQdoE78vdVSk71JhFcum5sYLFNaBZmEeIIcy6MffsJmtoypanFmwrI6S9fQo3MZcJhmH8a/nSeTU2jgjVo1eJZ7mAV8wFy3cEkMstZ9kSZ+izx6GuebcZ6dTXEoy0a8ie7mv4dLpIkNdLeIGUyqHYGeRb7/KlKS1Xl/ZnHE4yb63/R51esHw6r7K/Tt9PtV56Paa1ITZPVf40/OkABtHqv8AEn50ACUPl/Ev50CCK6Dbc8x5Uh2Bl9PiKAsEUkMcUxMemhBLVCZItNEMNaoTOtwfbnE28N+jQCIgMdYERWnMt61POlwXi0k1Fvm5dKvv3RTXja92oIum7LZ2DIqFdMoUFCZGs0tKN1CXO26rp79/Lrd4Jj1vXkR2dVYwSXQ//GKqEbephxc5Y8UpQWqOk7ScKFpi2Hulra+0xcIoPvRvnVSi6To4+H4uLm8cpc3Z1V6dm/kZOGxIGZnugqBqEuK5JkQAAi6k85/MRqzsfaiR8Obr5S2sA3yPZtL9HDoeo+kesjkZ0XhVGSd+JPTp/ZImLe6yphreYZjbUCf3YPlud+lC31ZM3Ssgv8RuoxRlhlJDDoQYIrRQ8zNO1Zewl3EOCyJIHrWnI+5zZM+OLSk6bJcNjbjZiQYQSxAJgSBrrpvQ4siVL5lrA3RecIG1O0iB/wBqfiSv3+xErWy8vdlm3xFVORLeZ1JGpyqSPQyfjyNVyt7sIJuPNXv35mnicZi8VhWgCAVgrDIRIBACnUCeZ9aiMMcJ+F6+Z1SlllGst8qd6afIyMNwgYcd9fcBgCEzEHxRsqc43gCJjTnWnNG63Hz5cq8Cpeenv1IF4ncY93Za+Z3aGeT5hwZHuHvq3GL3ElOCbbv39grvAMGROLZbNxvZZFcTPNkI28+VZSjWsFf0Lw8TKbpvT5+/p9CniOydu3qbi9UuK6G03QNmIiarmhvt6lrLkbcUub0fv7mVxDssU1BK6AlTDlZ2OhHhPI/iKlY+bVG3/LSdNfP+/Mzxw8qyi4CSp0VdyuhBJ+ivPXrSce5qpp7dQMXczHKNddY9lddAv4nn8xNy06D5Yx16g27Bbwn2ht+VWo9GRKaWvQ2bVvPiDYB8Fuz3N2ObXJZh7ngf8Kxfjk/exLyfBw873bv6/gvcbixgWnQd1etqOX63IgHvI/7VlmpWvT+Q4Jym1J9W38tP6PM8R9H7K/KuI9kgNIY1ADUgQR2HqfwoH1ApAIUDHpiYqYggaYgxVIgNTTESiqIYYNMklttFUmRJHU8KxeMGDcW7yiyz5WVZa9IEyqjUDzJA8xVq2jz8iwrL4tNnvSdbfSyDDJcuZchuEsYTO+bIRo10j6J3hdSOp0Jm6OhpUPi8cqAWcOfAshjAPeMdyZ0I/wA6VSRFPdg4XEtOYxAP0Uthi3IL4d/kPcDaJlG07NS7ctp7dq6rnU5hZEz/APzmtlE5Izc4+Fp+a2+n5Nfg/H7li2yLZJDj93Y68lFDjFtX0OfJim3LllSkqenT+CPCYK9cS69pXVcs3RnAzCZiMuoqpNWiXUdHrS+itLv3oyREBgSNYMnUHlqADrr8DVJ9zdq9DV4YVLE27RZnV1LGQJKmQNZg/Ix6Nq/QmTcd36I6C5h2w9lURxaLsMzouZgcygIoJ0AgSSRUX8R3W309Sk1Dd723rr0097mJxHij3LhXv3ATwAPhrTtI9rxCZk+Qqoxa209DVxi0m0n86/ggv3b0Q194jQrZK/AaLPnWlMyi8d6JenNoUcNgUJLZMTdY82AQMfM+NmFJJrY1llilq0vRnR4LhuZcotEpztN7SbybZ1E6npMmRSnXX8HKs0ua4O/Tc1+HdkHygKxAWSmaVidwBvbOmoEqenKuaXFY46P3/f7nbHh8+Z3HZrqt/J9n9nuUO0PZV7qDMy2WtnUnRbyA7lVkll2ECDI2o+JGT01T+xWFSxKpx5Wu739PdHCuMPbYi2XvNJ1y92szsJlj8BW0G10Nciclq6J8Rf7mw18IBdzJbTnkLBznM7sAunmfKjNJpLzMsEFPI4t6LX1NLsvw5kYZAWLgNnOuedZPlqfvqKjGFsx4rLLLkUI73t/Zzn+onGhev/o9o/qrBKz9e4JDH0Ukge+vOlJy3Pcw4Y41UfaOVxHL7K/KszdkBoGNSAagaCOw9T8hQHUCkAwoGFTEKmIemIMGmJhqaZDDBqhMkFUmQw1NBLOw7AdoLWDe53qZlca89p0rWOqq6PO4vFJyjNRUkrTi9mn+zAx/EbNx3ZFRA8iQSLkTBDEWjExO50NEtWVw+KWPGoydtGdks/W/nb/6aNTUmtNqrpmIQ+GPCgMgy1xwPEecqOQ2App0TOClFxfU2LvELmNum5euW5VfE0Hu7aiBLEjxnYBROYx6HSMqVI5vhKGt2333dKv2RVLEmVtSDqC4JZp+kxnc71ra7i5XWp0TcHxFqwL5ZFRyA4GgjnJnoaTkm2r1OLmUuVuHhtpPTdeW5j8HvWkc96uYEEAI9uc26k+LYGnzdjfLjm46e/szcwPFUGr5+YyoUHIbsJim03t9yY4eXf7Hd4S/hnw4MCPqz0I8teVcc45Y5Tsxy4afD01re3zXkcDx3tPYsXHDKzXMxlA+UT1dlUZfTc11fE5VSfv7mUOD+J4pLfv/AKMtO3r6gWEURqD4x78w/vUOdnQuCitq+iHHbdSfFgbDf8TPuBn8KLfdlLhlH9NL5Gjhu01lhnTA21IOuUoCvnGQx86uMZNaMxyQV1J/Y7Hs32ntFSCzg7w/ijl4YgkafVFYZ+GlN2l79+Zpg4lcOmpSb+9fT+EWbvFrLPFxlKkSp1JHI6QGXX1pLDOMfDv7+T+xlLiMeSbeSnH60/8A9L017nM8Y7MKWL4ELmaSysRnIPO1yy/zVtjzV/8AJ79fP7BKCkqxu12vX5d19+5zt/gNy7lw6qdG7y4eSkAqBPkC0nbWtZtbvYzw5autZPp5efYu9qOLpwzC2rFi5LkOY67BW692Dm+1A5TXFkn4m2tenl+Tu4fH8SKp6Xcn320Xl59TyRiTuZPMnc+dcx6aHxB2+yvypFENIBUgFQMR295/CgXUGkMYUAOKAHpoTHpiHFMQYpkskWqRJInrVIlkigUySZDFNMzassYe+UZXXdSGE6iQZ2q09bMpwUouLLeM4lcuu1xhbzMcxi3b3P8AxpkwgorlD4TbXEX0TEXiikwXbXKPKdqcdSc8nCFxXb/dLV1udonZ3B/o9wpfD92xKjk5AMM0b+nT1M6qLuq/B5L4yfNcmk7SUadtPqn0719ehyKMGyBJe87EOGUQCWhQpOhncnSNusxWp6bdW3ojaxNvGgG09xQFMFTAiOUZapyOaGDDzfEitSsUvWxIa0Y12X7vDpQpdjVwT/UaK37ptC4iWmAB1Afrps2m+o8q64NvZnM8eNSqVoucE4hib+ey7xIkKojVdfU+/pQ4peKQ5pQSUClc7MZiwvvaRVVgr3GFtgFEIZmSPZ3B6CKxkoPXr5HTHPkqoRfz0RjWuG4Mafp1gmOTPA25hI99Z3i7nTzZv+hMOF4fdcThwOcX7XxOcz91WuTozNzy9YP6E6W8Jb1OMSf/ANea4f4lEffFHxIrYlxyS3jp5/0aWD4rh1DyxdYAJyANrO2WDOnOapZk9Uc2ThJ0lS+4d7j+EVEJN324X9Ws7ax45+rPSB1olmrWvuKHA5G2ub7e9/4LmH7c4KMro9yGMFgBkJ8wxJ+z5VzylzPw6dzox8FyqslSSdrdNP8AryMLtF24vWDkt4e0M4DpdN27eRlJIDC28AHQ6GYPXnjOeSDpnVDhcGRXq/Jt7+erv5nn+Nxty85uXrhd21ZmMk/kPIaVhZ3pVoisWpFB3zqPsr8qQyKaAGpDoU0AOdvefwoF1BpDGFADigY9MQqYiRVmrStEN0GqU0hNkqWtJmqUdDNy1FSHuOGpiaCDUyaJkamiGiXN51RFBo2tNPUTVlpLjahZ8xW3M3sYOMd2NhMS1q4rrurBhO0jrUJ0x5MayQcXsz0XtDcsX8OMSbwN5hJAZLew2ltPdVcq2rToeRgnk+LrJuTb5k47dnapO/I418YyggDXKWAYpcVlE5oKgQRlPw+M7bHqKCb1LXZjjmIJu2ReILqDbgIu2bMBA1IkGPJqeOXNLxGuTGlG0vXqUsXj8XZugviL2hnKWcTG6kTHvq5JqVlY1CUaSQXEMQbWIW5LNavW9SCZKnSQJ3UZDHMjzob5Z2hRjz4+VvVP7/1/Bk4lLtm46liRGZTmJBUwVI16VhKLTOmLUkVDjbn1yPQn8amyuVDW711jAZz/AMj9/SmlzOkgdRVs1LHeeG0rsWJk+I7nznQflNdMYKK5TmlK/F0K2O4kz3AEuNlSEUyRmhiS0eZJjyiuecuZnRjx8q136iw1241yMzGSRGY6if8APQxV448zJySUU2H2txrd+Lauw7q2ls6kAtq7GAerx/xrHPK5uvQOEhWK31bf1MQ4m5/uN/EfzrGzroE4h/rt/EfzpAFfvvp429leZ6CkBEbrfWPxNFjSQOc9T8TSsOVdhi56n40WFIcsY3O5/CiwpWDmPWkOkAKBj0CCFOgscCqSJDU1SJYamqRLDBpioKmSDUlbhg07JaDR4qkyWiTPRZNBq9MlonGJar52ZfDQWcx60WKtR89Ow5TZwmIs3+6tN3eHyW7ytdOY58ytlzdDJ++nuc8ozx3JeK2tNfz6aL16swb65cjAwcpIIkEHO4BHvFZ1udsG3a99DqsNxsYnD5cQhcqQBcBKeyo9vLIGpiY6SOddEZXE53i5Z+HQbApavoLL2ri5Je0QyuIGrKCAJnUz1jyrSNy6Cn/67le5313s1gmwWd/EMpIGkid8sEQZ13is3kk83w+U54usPx/iO+2neq9s8zu4Lhtol3e6QGyqjjwsdzqgkgc/tDqKU444u5HbGeeUaVe/UiucTwyghHAnpbYn0AbKo/zaqfEQ6BHBkesvf7mViuIAqUsqQG9pmjMRzXQmAeepn0mcJ5HLRHRDHy6sqWLZkeo+dSos0bOg4aEsBsVdjKjaLzuPqVQesSegBPKujmWKHM9+hw5E80/hL5+S96I5K5cZiWcyzEsx6sTJPvJrzj1NOgFAxUgCvcvsr8hQJEdIoVIBqAH5fH8KOguo1BQFABCgQVUINatEsQpAEDVJkhA07EGDTFQ7mhiQINIZISOVPQmmOposTQYNUSGrUWJolVppozY7GKYIRfSKoKN02ML+hB/0txezEG0CYyzyWR60OKa2OVTy/G5eXT06VvfrpVeZjYDFLbZka4wVtA4kZTproSYMD7vOs4twdM73HmV0jWwti+hVrZJcEMMrEi8s5gykaP0I6RXTBu/ephPlap7fsPjOM42212zmOVSwHhU6SCsmN8sU5ZcidEY+GwOp1qY36Bib5zPoBuzkKijck8gK53CUtWdnPCOiIcUlsQttswA1fUBmkyQNwNgJ10nnFFLoCb6j2MMz+yCfcT8P86VSjYnKjYt8Lt4eLmMuBNitsANdudMq8hP0jA86rnhDfVmT+Jk0gvmYvHOLPiGiAltJFu2NlG0k/SYwJPlyFcuTI5u2dOHDHFGl13fd++hmVBsNSAVABXdx6L8hSYIA0hjUAKgB/wC/4UB1GpDApgPNABA07FQU1dk0OKAHFMQQNMkIGmIcmhgCDU2Ogg1MVBhqYqCBp2TQammS0SJcimnRLimOXnWnYuUO1rPWqjqKWh1/YU4EJe/SbhVo08RUGPZ2OutXH36Hmcd8XmVXVOuWn4ul307mR2lsWHxH/pWZrWSQWksJuMu55BmHoJ6VnJHbw8pLG+ZddLq6860v0MVeIXbLEI0AHVCAyEg6kq0iZ57+dZuTjsdihGaTZr3u0ZdUdxcWUKk2rjZQ1sgQLdyR7JQ+1zNafGa1M/8AjrZfdfz+Cne4rhrn7VsU/RSLcDzEXAJ91Q80XvZccM46Kvv/AEOnGMHb1t4V2PW46r9wDfCaXxktkP4Mn+qX0X5RHiO1eJOlrJYG36pYeP8AyNLA+akVDySZccUUqevqYwuFnzMSSSCSSSSZ3JOpNQadAbh1PqfnQMGlYUKgYpoATn5D5ChiQNIYqAFQMYmgBqYDUgFTAKkIcVSEwqoQ9ADg0yQqYhmak2NIQNIKHFAg0NUhMKaYg1agloJTVJiYVMQ8xTFubXZC3eOKtNYK51aRmEiNmkehNaQjZycbkhDE3NaeXfp9zY43wm/g77C8tsgKxm2l1cwGZspmVScxPUnL1qH3XUWLIpJwaacXTT+z6N6V8jDHZe+2HbEmIU6g+15zrofKpcUdH/ISk0loqTeml7eZk4XxJctwNs67+0oMjfmub3gVO8WqOl7pmfnH1R/N+dYX5G1D5x9Ufzf1UWFCzj6g+Lf1UWFDq4keEb/vf1U0waE7iT4B8W/qobBIHOPqj4t+dK/IK8xZh9UfzfnRfkFPv+39DZh9UfzfnRfkFPv+wmbyHLr09abaBIafL5/nU2OhifL50ANNMYqAGpANQAhQAVAhUAEDVpiocUxBgVSRNiY9KT8gXmBUFD0wCmmSIGgKCFMQammJhBqZNBlpp2Kgi5IqrJrUs8Nx74e4l1N1IPqOY94qoy5XZlnwRzY3jl1Ot7W47FYy7ZdcEyi6iG3LM2cMYDEq4iT1ol0RycJCGNTcpa3rv0Vdbb2+plcOwGMvm9h+9W13QbPbJCqCpjIsf4d9aFdUXmlghKOVxtvZ7bevXsjnLWI7syBsysTzOWdB5GT91ZN0ektSHiVju7jKNpMek1nkjyyovHLmimVqzNBUAOKa3ExGgBqBioAaaAETQCGpgKkA9ACosBUrAGmAqYBCkAqBDUwHFCAOrJHoAGakYpoAegQ9MBwaYqDBoJYQqhBA0CHBpiH3qgO1u9gr64W3iWvxPKM2UbgKcwPOrlHltXqjzIccpS0h4ZNpPTVrfQPsdwxrWKQnENlJOYAEZpBEnU8ieXOs8c7dFcbNfCWlarXsrV1p2MLtdwi3YxjWbJ8JIAmdMxjnVONtLudPD5rhJ3fK2r7pGJj7vel2/eJX7O0fCPhUZXzts6sUeRJFCsDcQoYDg0IBTQwFSAagYqBD0wGpgKaAEDUsB6AGpAf/2Q==) center / cover",
                }}
              >
                Python Reversi MinMax Algorithms
              </CardTitle>
              <CardText>
                Python Application that decided next best move for each player using Alpha Beta pruning, and MinMax Aritificail intellegence Algorithm
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/ChuLew/Aritificial-Intellegence-/tree/master/mp3/xyz007"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#ff6347",
                  height: "176px",
                  background:
                  "url(https://miro.medium.com/max/1468/1*LB-G6WBuswEfpg20FMighA.png) center / cover",
                }}
              >
                Python Number Interpreter
              </CardTitle>
              <CardText>
                Python Application that can identify a picture of a number using Bayes rules probablity 
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/ChuLew/Aritificial-Intellegence-/tree/master/mp4/njj23_mgl70"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React/Spring/MySql</Tab>
          <Tab>C</Tab>
          <Tab>Java</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
