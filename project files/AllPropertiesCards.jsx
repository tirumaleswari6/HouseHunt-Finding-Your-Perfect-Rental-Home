const AllPropertiesCards = ({ property }) => {
  return (
    <div>
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>${property.price}</p>
    </div>
  );
};

export default AllPropertiesCards;
