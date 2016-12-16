import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const Leaderboard = (props) => {
  return(
    <TableRow>
      <TableRowColumn>{props.userz.rank}</TableRowColumn>
      <TableRowColumn>{props.userz.username}</TableRowColumn>
    </TableRow>
  )
};

export {Leaderboard}