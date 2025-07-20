export default function ItemTable({ items, onRowClick }) {
  return (
    <table className="w-full border mt-4">
      <thead className="bg-gray-100 text-sm">
        <tr>
          <th className="border p-2">Gambar</th>
          <th className="border p-2">Judul</th>
          <th className="border p-2">Owner</th>
          <th className="border p-2">Produk</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className="hover:bg-gray-100 cursor-pointer text-sm"
            onClick={() => onRowClick(item)}
          >
            <td className="border p-2 text-center"><img src={item.imageUrl} alt="" className="h-12 mx-auto" /></td>
            <td className="border p-2">{item.title}</td>
            <td className="border p-2">{item.owner}</td>
            <td className="border p-2">{item.product}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
