import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Spinner, Table } from "reactstrap";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const resp = await axios("https://restcountries.com/v3.1/all");
      setCountries(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const orderCountries = () => {
    const arr = countries.sort((a, b) => {
      if (a.name.common > b.name.common) {
        return 1;
      } else if (a.name.common < b.name.common) {
        return -1;
      }

      return 0;
    });

    console.log(arr);
    setCountries([...arr]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="mt-5">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Flag</th>
            <th onClick={orderCountries}>Name</th>
            <th>Population</th>
            <th>Capital City</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5} className="text-center">
                <Spinner />
              </td>
            </tr>
          )}

          {countries.map((country, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={country.flags.png} width="100" />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
              <td>{country.capital && country.capital.join(" | ")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;
