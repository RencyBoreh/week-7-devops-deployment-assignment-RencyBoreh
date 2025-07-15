// pages/Contacts.jsx
import { useState } from 'react';
import { useContacts } from '../hooks/useContacts';
import {
  addContact,
  updateContact,
  deleteContact,
} from '../services/contactService';
import ContactCard from '../components/ContactCard';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';

const Contacts = () => {
  const { contacts, loading } = useContacts();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [editingContact, setEditingContact] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    if (editingContact) {
      // Update existing contact
      try {
        await updateContact(editingContact._id, formData);
        toast.success('Contact updated!');
        setEditingContact(null);
        setFormData({ name: '', email: '', phone: '' });
        window.location.reload();
      } catch (error) {
        toast.error('Failed to update contact.');
      }
    } else {
      // Add new contact
      try {
        await addContact(formData);
        toast.success('Contact added!');
        setFormData({ name: '', email: '', phone: '' });
        window.location.reload();
      } catch (error) {
        toast.error('Failed to add contact.');
      }
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFormData({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted!');
      window.location.reload();
    } catch (error) {
      toast.error('Failed to delete contact.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">My Contacts</h2>

      {/* Contact Form */}
      <form
        onSubmit={handleAddOrUpdate}
        className="bg-white p-6 rounded shadow mb-8"
      >
        <h3 className="text-lg font-semibold mb-4">
          {editingContact ? 'Edit Contact' : 'Add New Contact'}
        </h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-style mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-style mb-3"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="input-style mb-4"
        />
        <button
          type="submit"
          className={`${
            editingContact
              ? 'bg-yellow-500 hover:bg-yellow-600'
              : 'bg-green-500 hover:bg-green-600'
          } text-white px-4 py-2 rounded w-full transition`}
        >
          {editingContact ? 'Update Contact' : 'Add Contact'}
        </button>
      </form>

      {/* Contact List */}
      {loading ? (
        <Loader />
      ) : contacts.length === 0 ? (
        <p className="text-gray-500 text-center">
          No contacts found. Start by adding one above.
        </p>
      ) : (
        contacts.map((contact) => (
          <ContactCard
            key={contact._id}
            contact={contact}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Contacts;
