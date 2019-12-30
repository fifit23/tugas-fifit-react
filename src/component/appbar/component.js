import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import style from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Gambar from '../../assets/back.png';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

function Appbar(props) {
  const { title } = props;

  return (
    <Box display="flex" justifyContent="center">
      <AppBar
        position="static"
        style={{
          maxWidth: 448,
          position: 'fixed',
          backgroundColor: '#ff5722'
        }}>
        <Toolbar>
          {props.back && (
            <IconButton
              onClick={() => {
                props.history.push('/');
              }}>
              <img src={Gambar} style={{ width: 20, height: 20 }} />
            </IconButton>
          )}

          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default withRouter(Appbar);
