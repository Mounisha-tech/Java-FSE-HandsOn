import officeImage from "./images/office.jpg";

function App() {

  const office = {
    name: "Regus Office",
    rent: 55000,
    address: "Bangalore"
  };

  const officeList = [
    {
      name: "Regus Office",
      rent: 55000,
      address: "Bangalore"
    },
    {
      name: "WeWork",
      rent: 75000,
      address: "Hyderabad"
    },
    {
      name: "SmartWorks",
      rent: 90000,
      address: "Chennai"
    }
  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="400"
      />

      <h2>Featured Office</h2>

      <p><b>Name:</b> {office.name}</p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> {office.rent}
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {

        officeList.map((item, index) => (

          <div key={index}>

            <h3>{item.name}</h3>

            <p
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              <b>Rent:</b> {item.rent}
            </p>

            <p><b>Address:</b> {item.address}</p>

            <hr />

          </div>

        ))

      }

    </div>

  );

}

export default App;