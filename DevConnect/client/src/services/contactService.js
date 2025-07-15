// services/contactService.js
import API from './api';

export const getContacts = async () => {
  const res = await API.get('/contacts');
  return res.data;
};

export const addContact = async (formData) => {
  const res = await API.post('/contacts', formData);
  return res.data;
};

export const updateContact = async (id, formData) => {
  const res = await API.put(`/contacts/${id}`, formData);
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await API.delete(`/contacts/${id}`);
  return res.data;
};
