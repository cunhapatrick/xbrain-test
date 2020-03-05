import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import * as exampleActions from 'store/modules/example/actions';

// Components
import Example from 'components/Example';
/*
import ProductCard from 'components/ProductCard';
import GeneralInput from 'components/GeneralInput';
import GeneralButton from 'components/GeneralButton';
*/

// CSS
// import * as style from './Home.style';

export const Home = () => <Example />;

const mapStateToProps = (state) => ({
	example: state.example,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(exampleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
