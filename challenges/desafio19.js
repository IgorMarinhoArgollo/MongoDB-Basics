db.produtos.updateMany(
  {
    ingredientes:
      { $elemMatch: { $eq: "cebola" } },
  },
  {
    $pull:
    {
      ingredientes: "cebola",
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);