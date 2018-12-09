import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

class Photo extends React.Component {

  render() {
      const { image } = this.props;
      return (
      <>
        <Card className="grid-card">
          <CardActionArea>
            <CardMedia className="grid-card-media"
              src={image.link}
              image={image.link}
              title={image.description}
            />
            <CardContent>
              <Typography gutterBottom variant="caption" component="legend">
                {image.link}
              </Typography>
              <Typography component="p">
              <br/><span className="b">Description: </span><br/>{image.description}
              </Typography>
              <Typography component="p">
                <br/><span className="b">Creation: </span><Moment format="YYYY-MM-DD HH:mm">{image.creationDate}</Moment>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="pa0">
            <Button size="small" color="primary">
              Expand
            </Button>
          </CardActions>
        </Card>
      </>
      );
    }
}

export default Photo;
