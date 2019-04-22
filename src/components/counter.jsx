import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

export default class Counter extends Component {
  state = {
    number: 0
  };

  Tambah = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  };
  Kurang = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  };

  render() {
    return (
      <div>
        <Card style={{ width: '50%' }}>
          <CardImg
            top
            width="100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YTElG5Mlxl6gKrX-DtZ0WB3mF1b3d0i8WWxQGDKw1a9dGHzOBA"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontWeight: 'bold' }}>Sayur Kol</CardTitle>
            <p>Pesan Berapa</p>
            <h1>{this.state.number} </h1>
            <Button onClick={this.Tambah} className="btn btn-success m-2">
              +
            </Button>
            <Button onClick={this.Kurang} className="btn btn-danger m-2">
              -
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
