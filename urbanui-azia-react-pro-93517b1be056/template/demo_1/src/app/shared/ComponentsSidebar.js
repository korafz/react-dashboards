import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class ComponentsSidebar extends Component {
  render() {
    return (
      <div>
        <div className="az-content-left az-content-left-components">
          <div className="component-item">
            <label>UI Elements</label>
            <nav className="nav flex-column">
              <Link to="/ui-elements/accordions" className={ this.isPathActive('/ui-elements/accordions') ? "nav-link active" : "nav-link" }>Accordion</Link>
              <Link to="/ui-elements/alerts" className={ this.isPathActive('/ui-elements/alerts') ? "nav-link active" : "nav-link" }>Alerts</Link>
              <Link to="/ui-elements/avatar" className={ this.isPathActive('/ui-elements/avatar') ? "nav-link active" : "nav-link" }>Avatar</Link>
              <Link to="/ui-elements/badges" className={ this.isPathActive('/ui-elements/badges') ? "nav-link active" : "nav-link" }>Badge</Link>
              <Link to="/ui-elements/breadcrumbs" className={ this.isPathActive('/ui-elements/breadcrumbs') ? "nav-link active" : "nav-link" }>Breadcrumbs</Link>
              <Link to="/ui-elements/buttons" className={ this.isPathActive('/ui-elements/buttons') ? "nav-link active" : "nav-link" }>Buttons</Link>
              <Link to="/ui-elements/cards" className={ this.isPathActive('/ui-elements/cards') ? "nav-link active" : "nav-link" }>Cards</Link>
              <Link to="/ui-elements/carousel" className={ this.isPathActive('/ui-elements/carousel') ? "nav-link active" : "nav-link" }>Carousel</Link>
              <Link to="/ui-elements/collapse" className={ this.isPathActive('/ui-elements/collapse') ? "nav-link active" : "nav-link" }>Collapse</Link>
              <Link to="/ui-elements/dropdowns" className={ this.isPathActive('/ui-elements/dropdowns') ? "nav-link active" : "nav-link" }>Dropdown</Link>
              <Link to="/ui-elements/icons" className={ this.isPathActive('/ui-elements/icons') ? "nav-link active" : "nav-link" }>Icons</Link>
              <Link to="/ui-elements/images" className={ this.isPathActive('/ui-elements/images') ? "nav-link active" : "nav-link" }>Images</Link>
              <Link to="/ui-elements/list-group" className={ this.isPathActive('/ui-elements/list-group') ? "nav-link active" : "nav-link" }>List Group</Link>
              <Link to="/ui-elements/media-object" className={ this.isPathActive('/ui-elements/media-object') ? "nav-link active" : "nav-link" }>Media Object</Link>
              <Link to="/ui-elements/modals" className={ this.isPathActive('/ui-elements/modals') ? "nav-link active" : "nav-link" }>Modals</Link>
              <Link to="/ui-elements/navigation" className={ this.isPathActive('/ui-elements/navigation') ? "nav-link active" : "nav-link" }>Navigation</Link>
              <Link to="/ui-elements/pagination" className={ this.isPathActive('/ui-elements/pagination') ? "nav-link active" : "nav-link" }>Pagination</Link>
              <Link to="/ui-elements/popover" className={ this.isPathActive('/ui-elements/popover') ? "nav-link active" : "nav-link" }>Popover</Link>
              <Link to="/ui-elements/progress" className={ this.isPathActive('/ui-elements/progress') ? "nav-link active" : "nav-link" }>Progress</Link>
              <Link to="/ui-elements/spinners" className={ this.isPathActive('/ui-elements/spinners') ? "nav-link active" : "nav-link" }>Spinners</Link>
              <Link to="/ui-elements/toast" className={ this.isPathActive('/ui-elements/toast') ? "nav-link active" : "nav-link" }>Toast</Link>
              <Link to="/ui-elements/tooltip" className={ this.isPathActive('/ui-elements/tooltip') ? "nav-link active" : "nav-link" }>Tooltip</Link>
            </nav>

            <label>Forms</label>
            <nav className="nav flex-column">
              <Link to="/form/form-elements" className={ this.isPathActive('/form/form-elements') ? "nav-link active" : "nav-link" }>Form Elements</Link>
              <Link to="/form/form-layouts" className={ this.isPathActive('/form/form-layouts') ? "nav-link active" : "nav-link" }>Form Layouts</Link>
              <Link to="/form/form-validation" className={ this.isPathActive('/form/form-validation') ? "nav-link active" : "nav-link" }>Form Validation</Link>
              <Link to="/form/form-wizards" className={ this.isPathActive('/form/form-wizards') ? "nav-link active" : "nav-link" }>Form Wizards</Link>
              <Link to="/form/wysiwyg-editor" className={ this.isPathActive('/form/wysiwyg-editor') ? "nav-link active" : "nav-link" }>WYSIWYG Editor</Link>
            </nav>

            <label>Charts</label>
            <nav className="nav flex-column">
              <Link to="/charts/chartjs" className={ this.isPathActive('/charts/chartjs') ? "nav-link active" : "nav-link" }>ChartJS</Link>
            </nav>

            <label>Tables</label>
            <nav className="nav flex-column">
              <Link to="/tables/basic-table" className={ this.isPathActive('/tables/basic-table') ? "nav-link active" : "nav-link" }>Basic Tables</Link>
              <Link to="/tables/data-tables" className={ this.isPathActive('/tables/data-tables') ? "nav-link active" : "nav-link" }>Data Tables</Link>
            </nav>
          </div>{/* component-item */}

        </div>{/* az-content-left */}
      </div>
    )
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(ComponentsSidebar)
