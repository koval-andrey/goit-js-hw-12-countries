const BASE_URL = "https://restcountries.eu/rest/v2";

function fetchCountryName(countryName) {
    const url = `${BASE_URL}/name/${countryName}`
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Error fetching data");
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  }
  export default { fetchCountryName }
  