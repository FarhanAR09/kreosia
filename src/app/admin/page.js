'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import {
  fetchItems,
  createItem,
  updateItem,
  deleteItem,
} from "@/services/cosmosService";
import CrudModal from "@/components/CrudModal";
import ItemTable from "@/components/ItemTable";
import AdminPageTemplate from "@/components/AdminPageTemplate";

export default function AdminPage() {
    
    const router = useRouter();
    const { authenticated, loading: authLoading } = useAdminAuth();

  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

    const handleSave = async (item) => {
        setLoading(true);
        setModalOpen(false); // Immediately close modal

        const saved = item.id ? await updateItem(item) : await createItem(item);
        const updatedList = item.id
            ? items.map((it) => (it.id === item.id ? saved : it))
            : [...items, saved];
        setItems(updatedList);
        setLoading(false);
    };

    const handleDelete = async (id) => {
        setLoading(true);
        setModalOpen(false); // Immediately close modal

        await deleteItem(id);
        setItems((prev) => prev.filter((i) => i.id !== id));
        setLoading(false);
    };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
        if (!authLoading && authenticated) {
        setLoading(true);
        fetchItems().then((items) => {
            setItems(items);
            setLoading(false);
        });
        }
    }, [authLoading, authenticated]);

  return (
    <AdminPageTemplate
      content={
        <div className="p-4 max-w-5xl mx-auto text-black">
          <header className="flex items-center gap-2 mb-4">
            <h1 className="text-2xl font-bold flex-1">Ubah Data: Pengusaha</h1>
            <button
              className="bg-green-700 text-white px-4 py-2 rounded"
              onClick={() => {
                setEditingItem(null);
                setModalOpen(true);
              }}
            >
              Tambah Data
            </button>
          </header>

          {loading ? (
            <p className="text-gray-500 text-center mt-8">Loading...</p>
            ) : (
            <ItemTable
                items={items}
                onRowClick={(item) => {
                setEditingItem(item);
                setModalOpen(true);
                }}
            />
            )}

          <CrudModal
            visible={modalOpen}
            item={editingItem}
            onClose={() => setModalOpen(false)}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        </div>
      }
    />
  );
}
