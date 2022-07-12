import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import {Bar, Doughnut} from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import { Trans } from 'react-i18next';

export class Dashboard extends Component {
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  constructor(props){
    super(props)
    this.state = {
      startDate: new Date(),
      visitSaleData: {},
      visitSaleOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display:false,
            },
            gridLines: {
              drawBorder: false,
              color: 'rgba(235,237,242,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            }
          }],
          xAxes: [{
            gridLines: {
              display:false,
              drawBorder: false,
              color: 'rgba(0,0,0,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            },
            ticks: {
              padding: 20,
              fontColor: "#9c9fa6",
              autoSkip: true,
            },
            categoryPercentage: 0.5,
            barPercentage: 0.5
        }]
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        }
      },
      trafficData: {},
      trafficOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: false,
      },
      todos: [
        {
            id: 1,
            task: 'التقاط الاطفال من المدرسة',
            isCompleted: false
        },
        {
            id: 2,
            task: 'الاستعداد للعرض التقديمي الخاص بك',
            isCompleted: true
        },
        {
            id: 3,
            task: 'طباعة البيانات',
            isCompleted: false
        },
        {
            id: 4,
            task: 'إنشاء فاتورة',
            isCompleted: false
        },
        {
            id: 5,
            task: 'استدعاء جون',
            isCompleted: true
        },
        {
            id: 6,
            task: 'لقاء مع أليسا',
            isCompleted: false
        }
      ],
      inputValue: '',
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  statusChangedHandler(event, id) {

    //const todoIndex = this.state.todos.findIndex( t => t.id === id );
    const todo = {...this.state.todos[id]};
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
        todos: todos
    })
  }

  addTodo (event) {
      event.preventDefault();

      const todos = [...this.state.todos];
      todos.unshift({
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          task: this.state.inputValue,
          isCompleted: false
          
      })

      this.setState({
          todos: todos,
          inputValue: ''
      })
  }

  removeTodo (index) {
      const todos = [...this.state.todos];
      todos.splice(index, 1);

      this.setState({
          todos: todos
      })
  }

  inputChangeHandler(event) {
      this.setState({
          inputValue: event.target.value
      });
  }

  componentDidMount(){
    //your code
    var ctx = document.getElementById('visitSaleChart').getContext("2d")
    var gradientBar1 = ctx.createLinearGradient(0, 0, 0, 181)
    gradientBar1.addColorStop(0, 'rgba(218, 140, 255, 1)')
    gradientBar1.addColorStop(1, 'rgba(154, 85, 255, 1)')

    var gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360)
    gradientBar2.addColorStop(0, 'rgba(54, 215, 232, 1)')
    gradientBar2.addColorStop(1, 'rgba(177, 148, 250, 1)')

    var gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300)
    gradientBar3.addColorStop(0, 'rgba(255, 191, 150, 1)')
    gradientBar3.addColorStop(1, 'rgba(254, 112, 150, 1)')

    var gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 181)
    gradientdonut1.addColorStop(0, 'rgba(54, 215, 232, 1)')
    gradientdonut1.addColorStop(1, 'rgba(177, 148, 250, 1)')

    var gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 50)
    gradientdonut2.addColorStop(0, 'rgba(6, 185, 157, 1)')
    gradientdonut2.addColorStop(1, 'rgba(132, 217, 210, 1)')

    var gradientdonut3 = ctx.createLinearGradient(0, 0, 0, 300)
    gradientdonut3.addColorStop(0, 'rgba(254, 124, 150, 1)')
    gradientdonut3.addColorStop(1, 'rgba(255, 205, 150, 1)')



    const newVisitSaleData = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
      datasets: [
        {
          label: "CHN",
          borderColor: gradientBar1,
          backgroundColor: gradientBar1,
          hoverBackgroundColor: gradientBar1,
          legendColor: gradientBar1,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [20, 40, 15, 35, 25, 50, 30, 20]
        },
        {
          label: "USA",
          borderColor: gradientBar2,
          backgroundColor: gradientBar2,
          hoverBackgroundColor: gradientBar2,
          legendColor: gradientBar2,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [40, 30, 20, 10, 50, 15, 35, 40]
        },
        {
          label: "UK",
          borderColor: gradientBar3,
          backgroundColor: gradientBar3,
          hoverBackgroundColor: gradientBar3,
          legendColor: gradientBar3,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [70, 10, 30, 40, 25, 50, 15, 30]
        }
      ]
    }
    const newTrafficData = {
      datasets: [{
        data: [30, 30, 40],
          backgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          hoverBackgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          borderColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          legendColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Search Engines',
        'Direct Click',
        'Bookmarks Click',
      ]
    };
    this.setState({visitSaleData: newVisitSaleData, trafficData:newTrafficData} )
  }

  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white ml-2">
              <i className="mdi mdi-home"></i>
            </span> <Trans>Dashboard</Trans> </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span><Trans>Overview</Trans> <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3"><Trans>Weekly Sales</Trans> <i className="mdi mdi-chart-line mdi-24px float-right ml-2"></i>
                </h4>
                <h2 className="mb-5">$ 15,0000</h2>
                <h6 className="card-text"><Trans>Increased by</Trans> 60%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3"><Trans>Weekly Orders</Trans> <i className="mdi mdi-bookmark-outline mdi-24px float-right ml-2"></i>
                </h4>
                <h2 className="mb-5">45,6334</h2>
                <h6 className="card-text"><Trans>Decreased by</Trans> 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3"><Trans>Visitors Online</Trans> <i className="mdi mdi-diamond mdi-24px float-right ml-2"></i>
                </h4>
                <h2 className="mb-5">95,5741</h2>
                <h6 className="card-text"><Trans>Increased by</Trans> 5%</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="clearfix mb-4">
                  <h4 className="card-title float-left"><Trans>Visit And Sales Statistics</Trans></h4>
                  <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right">
                    <ul>
                      <li>
                        <span className="legend-dots bg-primary">
                        </span><Trans>CHN</Trans>
                      </li>
                      <li>
                        <span className="legend-dots bg-danger">
                        </span><Trans>USA</Trans>
                      </li>
                      <li>
                        <span className="legend-dots bg-info">
                        </span><Trans>UK</Trans>
                      </li>
                    </ul>
                  </div>
                </div>
                <Bar ref='chart' className="chartLegendContainer" data={this.state.visitSaleData} options={this.state.visitSaleOptions} id="visitSaleChart"/>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Traffic Sources</Trans></h4>
                <Doughnut data={this.state.trafficData} options={this.state.trafficOptions} />
                <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4">
                  <ul>
                    <li>
                      <span className="legend-dots bg-info"></span><Trans>Search Engines</Trans>
                      <span className="float-right">30%</span>
                    </li>
                    <li>
                      <span className="legend-dots bg-success"></span><Trans>Direct Click</Trans>
                      <span className="float-right">30%</span>
                    </li>
                    <li>
                      <span className="legend-dots bg-danger"></span><Trans>Bookmarks Click</Trans>
                      <span className="float-right">40%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Recent Tickets</Trans></h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> <Trans>Assignee</Trans> </th>
                        <th> <Trans>Subject</Trans> </th>
                        <th> <Trans>Status</Trans> </th>
                        <th> <Trans>Last Update</Trans> </th>
                        <th> <Trans>Tracking ID</Trans> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face1.jpg")} className="ml-2" alt="face" /> <Trans>David Grey</Trans> </td>
                        <td> <Trans>Fund is not recieved</Trans> </td>
                        <td>
                          <label className="badge badge-gradient-success"><Trans>DONE</Trans></label>
                        </td>
                        <td> <Trans>Dec</Trans> 5, 2017 </td>
                        <td> WD-12345 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face2.jpg")} className="ml-2" alt="face" /> <Trans>Stella Johnson</Trans> </td>
                        <td> <Trans>High loading time</Trans> </td>
                        <td>
                          <label className="badge badge-gradient-warning"><Trans>PROGRESS</Trans></label>
                        </td>
                        <td> <Trans>Dec</Trans> 12, 2017 </td>
                        <td> WD-12346 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face3.jpg")} className="ml-2" alt="face" /> <Trans>Marina Michel</Trans> </td>
                        <td> <Trans>Website down for one week</Trans> </td>
                        <td>
                          <label className="badge badge-gradient-info"><Trans>ON HOLD</Trans></label>
                        </td>
                        <td> <Trans>Dec</Trans> 16, 2017 </td>
                        <td> WD-12347 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face4.jpg")} className="ml-2" alt="face" /> <Trans>John Doe</Trans> </td>
                        <td> <Trans>Loosing control on server</Trans> </td>
                        <td>
                          <label className="badge badge-gradient-danger"><Trans>REJECTED</Trans></label>
                        </td>
                        <td> <Trans>Dec</Trans> 3, 2017 </td>
                        <td> WD-12348 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body p-0 d-flex">
                <div className="dashboard-custom-date-picker">
                  <DatePicker inline selected={this.state.startDate}  onChange={this.handleChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Recent Updates</Trans></h4>
                <div className="d-flex">
                  <div className="d-flex align-items-center ml-4 text-muted font-weight-light">
                    <i className="mdi mdi-account-outline icon-sm ml-2"></i>
                    <span><Trans>jack Menqu</Trans></span>
                  </div>
                  <div className="d-flex align-items-center text-muted font-weight-light">
                    <i className="mdi mdi-clock icon-sm ml-2"></i>
                    <span><Trans>October</Trans> 3rd, 2018</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6 pr-1">
                    <img src={require("../../assets/images/dashboard/img_1.jpg")} className="mb-2 mw-100 w-100 rounded" alt="face" />
                    <img src={require("../../assets/images/dashboard/img_4.jpg")} className="mw-100 w-100 rounded" alt="face" />
                  </div>
                  <div className="col-6 pl-1">
                    <img src={require("../../assets/images/dashboard/img_2.jpg")} className="mb-2 mw-100 w-100 rounded" alt="face" />
                    <img src={require("../../assets/images/dashboard/img_3.jpg")} className="mw-100 w-100 rounded" alt="face "/>
                  </div>
                </div>
                <div className="d-flex mt-5 align-items-start">
                  <img src={require("../../assets/images/faces/face3.jpg")} className="img-sm rounded-circle ml-3" alt="face" />
                  <div className="mb-0 flex-grow">
                    <h5 className="mr-2 mb-2"><Trans>School Website</Trans> - <Trans>Authentication Module</Trans>.</h5>
                    <p className="mb-0 font-weight-light"><Trans>It is a long established fact that a reader will be distracted by the readable content of a page</Trans>.</p>
                  </div>
                  <div className="ml-auto">
                    <i className="mdi mdi-heart-outline text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><Trans>Project Status</Trans></h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> <Trans>Name</Trans> </th>
                        <th> <Trans>Due Date</Trans> </th>
                        <th> <Trans>Progress</Trans> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> <Trans>Herman Beck</Trans> </td>
                        <td> <Trans>May</Trans> 15, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-success" now={25}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> <Trans>Messsy Adam</Trans> </td>
                        <td> <Trans>Jul</Trans> 01, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-danger" now={75}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> <Trans>John Richards</Trans> </td>
                        <td> <Trans>Apr</Trans> 12, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-warning" now={90}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td> <Trans>Peter Meggik</Trans> </td>
                        <td> <Trans>May</Trans> 15, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-primary" now={50}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> <Trans>Edward</Trans> </td>
                        <td> <Trans>May</Trans> 03, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-danger" now={50}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> <Trans>Ronald</Trans> </td>
                        <td> <Trans>Jun</Trans> 05, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-info" now={65}/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-white">Todo List</h4>
                <form  className="add-items d-flex" onSubmit={this.addTodo}>
                  <input 
                      type="text" 
                      className="form-control h-auto" 
                      placeholder="What do you need to do today?" 
                      value={this.state.inputValue} 
                      onChange={this.inputChangeHandler}
                      required />
                  <button type="submit" className="btn btn-gradient-primary font-weight-bold px-lg-4 px-3"><Trans>Add</Trans></button>
                </form>
                <div className="list-wrapper">
                    <ul className="d-flex flex-column todo-list">
                        {this.state.todos.map((todo, index) =>{
                            return <ListItem 
                            isCompleted={todo.isCompleted}
                            changed={(event) => this.statusChangedHandler(event, index)}
                            key={todo.id}
                            remove={() => this.removeTodo(index) }
                            >{todo.task}</ListItem>
                        })}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
const ListItem = (props) => {
    
  return (
      <li className={(props.isCompleted ? 'completed' : null)}>
          <div className="form-check">
              <label htmlFor="" className="form-check-label"> 
                  <input className="checkbox" type="checkbox" 
                      checked={props.isCompleted} 
                      onChange={props.changed} 
                      /> {props.children} <i className="input-helper"></i>
              </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
      </li>
  )
};
export default Dashboard;