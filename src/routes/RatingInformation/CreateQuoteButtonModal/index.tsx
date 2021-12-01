import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import useCreateQuote from 'data/hooks/mutations/createQuote';
import Button from 'components/atoms/Button';
import TextInput from 'components/atoms/Inputs/Text';
import PlacesInput from 'components/atoms/Inputs/Places';
import { H3 } from 'components/atoms/Typography';

export interface CreateQuoteButtonModalProps {}

const CreateQuoteButtonModal = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [parsedAddress, setParsedAddress] = useState(null);

  const navigate = useNavigate();

  const closeModal = () => {
    setQuoteModalOpen(false);
  };

  const onQuoteCreated = (response: any) => {
    const quoteId = response.data.createQuote.quoteId;
    closeModal();
    navigate(`/quotes/${quoteId}`);
  };
  
  const [createQuote, { loading }] = useCreateQuote(onQuoteCreated);

  const handleCreateQuote = () => {
    if (!parsedAddress) return;

    const { line_1, line_2, city, region, postal } = parsedAddress;

    createQuote({
      variables: {
        input: {
          first_name: firstName,
          last_name: lastName,
          address: {
            line_1,
            line_2,
            city,
            region,
            postal,
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
            overflow: 'visible',
          }
        }}
      >
        <H3 style={{ marginBottom: 20 }}>Create a Quote</H3>
        <TextInput
          label="First Name"
          onInputChange={(e, name) => setFirstName(name)}
          value={firstName}
        />
        <TextInput
          label="Last Name"
          onInputChange={(e, name) => setLastName(name)}
          value={lastName}
        />
        <PlacesInput
          onSelect={(parsedAddress, addressNormal) => {
            setAddress(addressNormal);
            setParsedAddress(parsedAddress);
          }}
          onChange={() => {
            setParsedAddress(null)
            setAddress('')
          }}
        />
        <Button
          onClick={handleCreateQuote}
          disabled={loading || !firstName || !lastName || !address}
          loading={loading}
        >
          Create
        </Button>
      </Modal>
    </>
  );
};

export default CreateQuoteButtonModal;
