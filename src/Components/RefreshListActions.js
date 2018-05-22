import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { translate, Link } from 'react-admin'
import { CardActions } from 'material-ui/Card'
import { stringify } from 'query-string';


import { GET_LIST } from 'react-admin';
import dataProvider from '../dataProvider';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });


const LinkToRelatedCustomers = ({ classes, segment, translate }) => (
    <Button
        color="primary"
        component={Link}
        to={{
            pathname: '/competitions',
            search: stringify({
                page: 1,
                perPage: 10,
                filter: '',
                sort: 'id',
                order: 'DESC'
            }),
        }}
    >
        Refresh
    </Button>
);

const enhance = compose(withStyles(styles), translate);
export default enhance(LinkToRelatedCustomers);
