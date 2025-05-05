const normalizeUser = (user) => ({

    phone: user.phone,
    email: user.email,
    password: user.password,
    name: {
      first: user.first,
      middle: user.middle,
      last: user.last,
    },
    image: {
      url: user.url,
    },
  });
  
  export default normalizeUser;