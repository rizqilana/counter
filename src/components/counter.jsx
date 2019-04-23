import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

export default class Counter extends Component {
  state = {
    number: 1,
    harga: 10000,
    biaya: 10000
  };

  Tambah = key => {
    this.setState(({ number, harga, biaya }) => ({
      number: number + 1,
      harga: harga + biaya
    }));
  };
  Kurang = () => {
    var number = this.state.number;

    if (number > 1) {
      this.setState(({ number, harga, biaya }) => ({
        number: number - 1,
        harga: harga - biaya
      }));
    }
  };

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <Card>
          <CardImg top width="100%" src={this.props.gambar} alt="Card" />
          <CardBody>
            <CardTitle style={{ fontWeight: 'bold' }}>
              {this.props.name}
            </CardTitle>
            <p>Pesan Berapa</p>
            <p>Harga : {this.state.harga} </p>
            <h1>{this.state.number} </h1>
            <Button onClick={this.Tambah} size="lg" color="success">
              +
            </Button>{' '}
            <Button
              onClick={this.Kurang}
              size="lg"
              className="btn btn-danger m-2">
              -
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
