import React from 'react';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { translate, Link } from 'react-admin'
import { stringify } from 'query-string';
import RefreshIcon from '@material-ui/icons/Refresh';

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
        <RefreshIcon />
    </Button>
);

const enhance = compose(withStyles(styles), translate);
export default enhance(LinkToRelatedCustomers);
