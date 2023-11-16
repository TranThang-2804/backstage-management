import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { TextField, Button, Box } from '@material-ui/core';
import { Table, TableColumn } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    height: 42,
    width: 42,
  },
});

export type Service = {
  name: string;
  picture: string;
};

type DenseTableProps = {
  services: Service[];
};

export const DenseTable = ({ services: services }: DenseTableProps) => {
  interface FormData {
    name: string;
    region: string;
    account: string;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
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
    console.log("bloe")
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

  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'icon', field: 'image' },
    { title: 'Name', field: 'name' },
    { title: '', field: 'button' },
  ];

  const handleCreateService = () => {
    openModal();
    return "hi";
  }

  const data = services.map(service => {
    return {
      image: (
        <img
          src={service.picture}
          className={classes.avatar}
          alt={service.name}
        />
      ),
      name: `${service.name}`,
      button:
        <Box>
          <button
            type="submit"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "200px",
              background: "#2196F3", // Change this to your preferred color
              color: "#fff", // Change this to your preferred text color
              borderRadius: "8px", // Adjust the value as per your preference
              padding: "12px 24px", // Adjust the values to change the padding
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Add a subtle box-shadow for a nice effect
              fontWeight: "bold", // Increase the font weight for emphasis
              fontSize: "16px", // Change the font size as needed
              cursor: "pointer", // Show a pointer cursor on hover
            }}
            onClick={() => { handleCreateService() }}
          >
            Create
          </button>
          <Modal open={isModalOpen} onClose={closeModal}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px' }}>
              <div>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Region"
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    margin="normal"
                  />

                  <TextField
                    label="Account"
                    type="text"
                    name="account"
                    value={formData.account}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    margin="normal"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "200px",
                      background: "#2196F3", // Change this to your preferred color
                      color: "#fff", // Change this to your preferred text color
                      borderRadius: "8px", // Adjust the value as per your preference
                      padding: "12px 24px", // Adjust the values to change the padding
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Add a subtle box-shadow for a nice effect
                      fontWeight: "bold", // Increase the font weight for emphasis
                      fontSize: "16px", // Change the font size as needed
                      cursor: "pointer", // Show a pointer cursor on hover
                    }}
                  >
                    Confirm
                  </Button>
                </form>
              </div>
            </div>
          </Modal>
        </Box>
    };
  });

  return (
    <Table
      title="Infra Service List"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};
