import { useState } from 'react';
import Modal from 'react-modal';
import useCreateQuote from 'data/hooks/mutations/createQuote';
import Button from 'components/atoms/Button';
import TextInput from 'components/atoms/Inputs/Text';
import { H3 } from 'components/atoms/Typography';

export interface CreateQuoteButtonModalProps {}

const CreateQuoteButtonModal = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('Jack');
  const [lastName, setLastName] = useState('Sparrow');

  const closeModal = () => {
    setQuoteModalOpen(false);
  };

  const onQuoteCreated = () => {
    closeModal();
  };
  
  const [createQuote, { loading }] = useCreateQuote(onQuoteCreated);

  const handleCreateQuote = () => {
    createQuote({
      variables: {
        input: {
          first_name: firstName,
          last_name: lastName,
          address: {
            line_1: "123 Mulberry Lane",
            line_2: "3B",
            city: "Brooklyn",
            region: "NY",
            postal: "11211"
          }
        }
      }
    });
  };


  return (
    <>
      <Button onClick={() => setQuoteModalOpen(true)}>
        Create a Quote
      </Button>

      <Modal
        isOpen={quoteModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }
        }}
      >
        <H3 style={{ marginBottom: 20 }}>Create a Quote</H3>
        <TextInput
          label="First Name"
          onChange={(e, name) => setFirstName(name)}
          value={firstName}
        />
        <TextInput
          label="Last Name"
          onChange={(e, name) => setLastName(name)}
          value={lastName}
        />
        <Button
          onClick={handleCreateQuote}
          disabled={loading || !firstName || !lastName}
          loading={loading}
        >
          Create
        </Button>
      </Modal>
    </>
  );
};

export default CreateQuoteButtonModal;