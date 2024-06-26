import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Input } from "semantic-ui-react";
import "../App.css";

// membuat Komponen UnsplashApi dengan Class
class UnsplashAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Menginisialisasi state dengan query kosong dan submittedQuery kosong
      query: "",
      submittedQuery: "",
    };
  }
  // Fungsi untuk menangani perubahan input
  handleChange = (e) => {
    // Mengupdate state 'query' sesuai dengan nilai input yang diisi pengguna
    this.setState({ query: e.target.value });
  };
  // Fungsi untuk menangani submit form
  handleSubmit = async (e) => {
    //  Mencegah halaman reload setelah form disubmit
    e.preventDefault(); // Mengambil nilai query dari state
    const { query } = this.state; // Mengambil nilai query dari state

    // Masukkan acces key API dari Unsplash
    const accessKey =
      "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296";
    try {
      // Membuat Permintaan GET ke API
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query }, // Mengirimkan parameter 'query'
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
      // Tampilan objek hasil di dalam console
      console.log(response.data.results);

      // Mengupdate state dengan submittedQuery
      this.setState({ submittedQuery: query });
    } catch (error) {
      // Menangani kesalahan jika permintaan gagal
      console.error("Error fetching data from Unsplash API:", error);
    }
  };

  render() {
    const { query, submittedQuery } = this.state; // Mengambil nilai query dan submittedQuery dari state

    return (
      <div className="form-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <h1>Search Unplas</h1>
            <Input
              placeholder="Enter search term"
              value={query}
              onChange={this.handleChange}
            />
          </Form.Field>
          {submittedQuery && (
            <div style={{ marginTop: "1px" }}>
              <h3>Pencarian untuk "{submittedQuery}"Silahakan Cek Console</h3>
            </div>
          )}
          <Button inverted color="purple" type="submit">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default UnsplashAPI;
