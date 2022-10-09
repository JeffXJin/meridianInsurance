import React, { PureComponent } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from './pages/Login'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Register from './pages/Register'
import Book from './pages/Book'
import Travel from './pages/Travel'
import Business from './pages/Business'
import Admin from './pages/Admin'
import Auto from './pages/Automobile'
import Property from './pages/Property'
import Life from './pages/Life'
import Contact from './pages/Contact'
import { Layout, Spin } from 'antd'
import * as actions from './redux/actions'
import PageHeader from './components/PageHeader'

const { Content, Footer } = Layout

class App extends PureComponent {
  componentDidMount = () => {
    this.props.actions.fetchUser()
  }

  render () {
    const loading = this.props.user.get('loading')

    if (loading) {
      return (
        <div className={'loading-container'}>
          <Spin size="large"/>
        </div>
      )
    }

    return (
      <Layout className="layout">
        <PageHeader/>
        {/* <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginTop: 50 }}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/book" component={Book}/>
            <Route exact path="/travel" component={Travel}/>
            <Route exact path="/business" component={Business}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/auto" component={Auto}/>
            <Route exact path='/property' component={Property}/>
            <Route exact path='/life' component={Life}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </Content> */}
        <Content>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/book" component={Book}/>
            <Route exact path="/travel" component={Travel}/>
            <Route exact path="/business" component={Business}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/auto" component={Auto}/>
            <Route exact path='/property' component={Property}/>
            <Route exact path='/life' component={Life}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        2022 © Meridian Insurance
        </Footer>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
