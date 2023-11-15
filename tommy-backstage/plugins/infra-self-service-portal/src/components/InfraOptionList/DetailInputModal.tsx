import React, { useState } from 'react';
import Modal from 'react-modal';

export const DetailInputModal = () => {
  interface FormData {
    name: string;
    region: string;
    account: string;
  }

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    region: '',
    account: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission with formData
    console.log('Form submitted with data:', formData);
    // You can add your logic to handle the form data, for example, making an API call.
    closeModal(); // Close the modal after submission
  };

  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Region:</label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Account:</label>
            <input
              type="text"
              name="account"
              value={formData.account}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};
