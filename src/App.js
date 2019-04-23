import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counter from './components/counter';
import { Row, Col, Spinner } from 'reactstrap';

class App extends Component {
  state = {
    makanan: [
      {
        nama: 'kebab',
        gambar:
          'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5451_foto-dafafoodindocom.jpg'
      },
      {
        nama: 'hamburger',
        gambar:
          'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
      },
      {
        nama: 'kentang goreng',
        gambar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw'
      },
      {
        nama: 'Nasi Uduk mcD',
        gambar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyQ8YDdLZyuMzaDjtgPsjuEJDKth7JmJDFHcj_RhsWTb_VcDk'
      },

      {
        nama: 'kebab',
        gambar:
          'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5451_foto-dafafoodindocom.jpg'
      },
      {
        nama: 'spagheti',
        gambar:
          'https://doktersehat.com/wp-content/uploads/2018/12/resep-spaghetti-doktersehat.jpg'
      }
    ]
  };

  render() {
    return (
      <div>
        <Header namaheader="header2" />
        <Row>
          {this.state.makanan.map(item => (
            <Col xs="3">
              <Counter
                gambar={item.gambar}
                name={item.nama}
                harga={item.harga}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
