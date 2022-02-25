export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((another) => {
    return {
      params: { id: another.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { another: data },
  };
};

const Details = ({ another }) => {
  return (
    <div>
      <h1>Name: {another.name}</h1>
      <h3>Username: {another.username}</h3>
      <p>Email: {another.email}</p>
      <p>Address: {another.address.street}</p>
      <p>Address Suite: {another.address.suite}</p>
      <p>Address City: {another.address.city}</p>
      <p>Address Zipcode: {another.address.zipcode}</p>
      <p>
        Lat: {another.address.geo.lat}, Lng: {another.address.geo.lng}
      </p>
      <p>Phone: {another.phone}</p>
      <p>Website: {another.website}</p>
      <p>Company name: {another.company.name}</p>
      <p>Company Catch Phrse: {another.company.catchPhrse}</p>
      <p>Campany Bs: {another.company.bs}</p>
    </div>
  );
};

export default Details;
