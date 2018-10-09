import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { connect } from 'react-redux';
import { searchFieldAction, requestVideosAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFieldReducer.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onsearchFieldAction: (event) => dispatch(searchFieldAction(event.target.value)),
    onrequestVideosAction: (searchField) => dispatch(requestVideosAction(searchField))
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    color: "white",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class SearchBar extends React.Component {

  enter = (event) => {
      if (event.key === "Enter") {
        this.props.onrequestVideosAction(this.props.searchField);
      }
    }

  render() {
  const { classes, onsearchFieldAction } = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="title" noWrap>
            YouMedia
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Input
              onChange={onsearchFieldAction}
              onKeyPress={this.enter}
              placeholder="search videos"
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles)(SearchBar);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);

