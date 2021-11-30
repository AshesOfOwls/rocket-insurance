import { useState } from 'react';
import Modal from 'react-modal';
import useCreateQuote from 'data/hooks/mutations/createQuote';
import Button from 'components/atoms/Button';

export interface CreateQuoteButtonModalProps {}

const CreateQuoteButtonModal = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const closeModal = () => {
    setQuoteModalOpen(false);
  };

  const onQuoteCreated = () => {
    closeModal();
  };
  
  const [createQuote, { loading, error }] = useCreateQuote(onQuoteCreated);

  const handleCreateQuote = () => {
    createQuote({
      variables: {
        input: {
          first_name: 'Prairie',
          last_name: 'Johnson',
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
      >
        <Button onClick={handleCreateQuote} disabled={loading} loading={loading}>
          CREATE A QUOTE
        </Button>
      </Modal>
    </>
  );
};

export default CreateQuoteButtonModal;
