// Mocked Cosmos DB service
const mockData = [
  {
    id: "1",
    imageUrl: "https://via.placeholder.com/100",
    title: "Produk A",
    content: "Deskripsi A",
    owner: "Suyanto",
    year: "2024",
    product: "Kopi",
    prices: "Rp 50.000",
    contacts: "08123456789",
  },
];

let data = [...mockData];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchItems = async () => {
  await delay(1000);
  return data;
};

export const createItem = async (item) => {
  await delay(1000);
  const newItem = { ...item, id: Date.now().toString() };
  data.push(newItem);
  return newItem;
};

export const updateItem = async (item) => {
  await delay(1000);
  const index = data.findIndex((d) => d.id === item.id);
  if (index !== -1) data[index] = { ...data[index], ...item };
  return item;
};

export const deleteItem = async (id) => {
  await delay(1000);
  const index = data.findIndex((d) => d.id === id);
  if (index !== -1) data.splice(index, 1);
  return;
};
