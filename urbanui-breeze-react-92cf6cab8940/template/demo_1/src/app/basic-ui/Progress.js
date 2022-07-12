import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';

export class Progress extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Progress
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Progress</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Colored Progressbar</h4>
                <p className="page-description">Add property <code>variant=&#123;color&#125;</code> for theme colors</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10}/>
                  <ProgressBar variant="primary" now={25}/>
                  <ProgressBar variant="info" now={50}/>
                  <ProgressBar variant="warning" now={75}/>
                  <ProgressBar variant="danger" now={100}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Progressbar Striped</h4>
                <p className="page-description">Add property <code>striped</code>.</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10} striped/>
                  <ProgressBar variant="primary" now={25} striped/>
                  <ProgressBar variant="info" now={50} striped/>
                  <ProgressBar variant="warning" now={75} striped/>
                  <ProgressBar variant="danger" now={100} striped/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Striped Animated</h4>
                <p className="page-description">Add property <code>animated</code>.</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10} animated/>
                  <ProgressBar variant="primary" now={25} animated/>
                  <ProgressBar variant="info" now={50} animated/>
                  <ProgressBar variant="warning" now={75} animated/>
                  <ProgressBar variant="danger" now={100} animated/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin grid-margin-md-0 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">With Label</h4>
                <p className="page-description">Progress bar with labels</p>
                <div className="template-demo">
                  <ProgressBar variant="danger" className="progress-lg" now={60} label={`600%`}/>
                  <ProgressBar variant="success" className="progress-lg" now={90} label={`90%`}/>          
                  <ProgressBar variant="warning" className="progress-lg" now={60} label={`60% complete`}/>        
                  <ProgressBar variant="info" className="progress-lg" now={88} label={`88% complete`}/>        
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Progressbar Sizes</h4>
                <p className="page-description">Use className <code>.progress-sm</code>, <code>.progress-lg</code>, <code>.progress-xl</code></p>
                <div className="template-demo">
                  <ProgressBar variant="info" className="progress-sm" now={25}/>
                  <ProgressBar variant="info" className="progress" now={50}/>          
                  <ProgressBar variant="info" className="progress-lg" now={75}/>          
                  <ProgressBar variant="info" className="progress-xl" now={100}/>          
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Circular Progressbar</h4>
                <p className="page-description">Use className <code>.progress-sm</code>, <code>.progress-lg</code>, <code>.progress-xl</code></p>
                <div className="row">
                  <div className="col-4">
                    <CircularProgressbarWithChildren className="progress-order"
                      value={34}
                      text={34}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#3f50f6",
                        trailColor: "#ededed",
                        textSize: '14px',
                        textColor: "#000"
                      })}>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="col-4">
                    <CircularProgressbarWithChildren className="progress-order"
                      value={54}
                      text={54}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#d8d8d8",
                        trailColor: "#ededed",
                        textSize: '14px',
                        textColor: "#000"
                      })}>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="col-4">
                    <CircularProgressbarWithChildren className="progress-order"
                      value={45}
                      text={45}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#00cccd",
                        trailColor: "#ededed",
                        textSize: '14px',
                        textColor: "#000"
                      })}>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">
                    <CircularProgressbarWithChildren className="progress-order"
                      value={27}
                      text={27}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#ff3ca6",
                        trailColor: "#ededed",
                        textSize: '14px',
                        textColor: "#000"
                      })}>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="col-4">
                    <CircularProgressbarWithChildren className="progress-order"
                      value={67}
                      text={67}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#ffab2d",
                        trailColor: "#ededed",
                        textSize: '14px',
                        textColor: "#000"
                      })}>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="col-4">
                    <CircularProgressbarWithChildren className="progress-order"
                      value={95}
                      text={95}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#198ae3",
                        trailColor: "#ededed",
                        textSize: '14px',
                        textColor: "#000"
                      })}>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    )
  }
}

export default Progress
