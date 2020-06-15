/**
* Copyright 2020 present, Lê Văn Mong.
* All rights reserved.
* @author MongLV@bkav.com on 15/6/2020.
* email: levanmong.dola.99@gmail.com
*/
'use-strict';
// Redux 
import { connect } from 'react-redux';
// Action

// Component
import GetList from '../components/GetList';
function mapStateToProps(state, ownProps) {return {};}
function mapDispatchToProps(dispatch) {return{};}
const GetListContainer = connect(mapStateToProps, mapDispatchToProps)(GetList)
export default GetListContainer;