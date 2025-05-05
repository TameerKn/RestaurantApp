const normalizeCard = (card) => {
    return {
      category: card.category,
      name: card.name,
      description: card.description,
      tag: card.tag,   
      image: {
        url: card.imageUrl,
        alt: card.imageAlt,
      },
      price: card.price,
    };
  };
  
  export default normalizeCard;