import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  };

   determinePicture(rank) {
    var url = ''
    if (rank === 1) {
      url = 'http://i.imgur.com/ciDDBOz.png';
    }
    if (rank === 2) {
      url = 'http://i.imgur.com/Zs7l8AD.png';
    }
    if (rank === 3) {
      url = 'http://i.imgur.com/t9YI38e.png';
    }
    if (rank === 4) {
      url = 'http://i.imgur.com/nvkleuQ.png';
    }
    if (rank === 5) {
      url = 'http://i.imgur.com/NO29rvV.png';
    }
    if (rank === 6) {
      url = 'http://i.imgur.com/XLicDQr.png';
    }
    if (rank === 7) {
      url = 'http://i.imgur.com/8OTPb7g.png';
    }
    if (rank === 8) {
      url = 'http://i.imgur.com/RAn6owu.png';
    }
    if (rank === 9) {
      url = 'http://i.imgur.com/weaQxmK.png';
    }
    if (rank === 10) {
      url = 'http://i.imgur.com/xwSRDv4.png';
    }
    return url;
  }

  render() {
    return(
      <TableRow>
 
        <TableRowColumn><Chip style={styles}>
            <Avatar src={this.determinePicture(this.props.userz.rank)} />
          {this.props.userz.rank}</Chip></TableRowColumn>
        <TableRowColumn><Chip style={styles}>
            <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/rogie/48.jpg" />
          {this.props.userz.username}</Chip></TableRowColumn>
      </TableRow>
    )
  }
}

export {Leaderboard}