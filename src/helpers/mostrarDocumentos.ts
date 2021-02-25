export const retornaDocumentos = snapshot => {
  const products = [];
  snapshot.forEach(snapHijo => {
    products.push({
      id: snapHijo.id,
      ...snapHijo.data()
    });
  });
};
