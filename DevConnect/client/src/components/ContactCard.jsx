// components/ContactCard.jsx
const ContactCard = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-blue-600">{contact.name}</h3>
        <p className="text-sm text-gray-600">{contact.email}</p>
        <p className="text-sm text-gray-600">{contact.phone}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(contact)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded shadow"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(contact._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
