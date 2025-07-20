import React, { useState, useEffect } from "react";
import { uploadImageMock } from "../services/blobService";

const defaultForm = {
  imageUrl: "",
  title: "",
  content: "",
  owner: "",
  year: "",
  product: "",
  prices: "",
  contacts: "",
};

export default function CrudModal({ visible, onClose, onSave, onDelete, item }) {
  const [form, setForm] = useState(defaultForm);
  const [file, setFile] = useState(null);

  // Sync form state with item prop when modal opens or item changes
  useEffect(() => {
    if (item) {
      setForm(item);
    } else {
      setForm(defaultForm);
    }
    setFile(null);
  }, [item, visible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (file) {
      form.imageUrl = await uploadImageMock(file);
    }
    onSave(form);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Ubah Data</h2>
        {["title", "content", "owner", "year", "product", "prices", "contacts"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field] || ""}
            onChange={handleChange}
            className="mb-2 w-full p-2 bg-gray-200 rounded text-black"
          />
        ))}
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
        <div className="flex gap-2">
          <button onClick={handleSave} className="bg-green-700 text-white px-4 py-2 rounded">Simpan</button>
          <button onClick={onClose} className="bg-orange-600 text-white px-4 py-2 rounded">Batal</button>
          {item?.id && (
            <button onClick={() => onDelete(item.id)} className="bg-red-700 text-white px-4 py-2 rounded">Hapus</button>
          )}
        </div>
      </div>
    </div>
  );
}
