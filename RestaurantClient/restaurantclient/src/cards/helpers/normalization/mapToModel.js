const mapCardToModel = (card) => {
    return {
      category: card.category,
      name: card.name,
      description: card.description,
      tag: card.tag,
      imageUrl: card.image.url,
      imageAlt: card.image.alt,
      price: card.price,
    };
  };
  
  export default mapCardToModel;