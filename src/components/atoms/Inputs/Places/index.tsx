import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import TextInput from 'components/atoms/Inputs/Text';
import { geocodeByAddress } from 'react-places-autocomplete';

import s from './Places.module.css';

export interface PlacesInputProps {
  onSelect(parsed: any, address: string): void,
  onChange(value: string): void,
}

const PlacesInput = (props: PlacesInputProps) => {
  const { onChange, onSelect } = props;

  const [address, setAddress] = useState('');

  const handleChange = (value: string) => {
    setAddress(value);
    onChange(value);
  }

  const handleSelect = (value: any) => {
    setAddress(value);
    retrieveGeocode(value);
  }

  const addressTypeMatches = (addressType: string[], matchedType: string[]) => {
    return addressType.some(type => matchedType.includes(type));
  };

  const getLine1 = (previousValue: any, currentValue: any) => {
    if (!addressTypeMatches(currentValue.types, ['street_number', 'route'])) return previousValue;

    if (!previousValue) return currentValue.short_name;
    return previousValue + ' ' + currentValue.short_name;
  };

  const getLine2 = (previousValue: any, currentValue: any) => {
    if (!addressTypeMatches(currentValue.types, ['unit'])) return previousValue;

    if (!previousValue) return currentValue.short_name;
    return previousValue + ' ' + currentValue.short_name;
  };

  const getCity = (previousValue: any, currentValue: any) => {
    if (!addressTypeMatches(currentValue.types, ['locality'])) return previousValue;

    if (!previousValue) return currentValue.short_name;
    return previousValue + ' ' + currentValue.short_name;
  };

  const getRegion = (previousValue: any, currentValue: any) => {
    if (!addressTypeMatches(currentValue.types, ['administrative_area_level_1'])) return previousValue;

    if (!previousValue) return currentValue.short_name;
    return previousValue + ' ' + currentValue.short_name;
  };

  const getPostal = (previousValue: any, currentValue: any) => {
    if (!addressTypeMatches(currentValue.types, ['postal_code'])) return previousValue;

    if (!previousValue) return currentValue.short_name;
    return previousValue + ' ' + currentValue.short_name;
  };

  const retrieveGeocode = (address: string) => {
    geocodeByAddress(address).then((results) => {
      const data = results[0];

      if (!data) return;

      const addressComponents = data.address_components;

      const parsedAddress = {
        line_1: addressComponents.reduce(getLine1, ''),
        line_2: addressComponents.reduce(getLine2, ''),
        city: addressComponents.reduce(getCity, ''),
        region: addressComponents.reduce(getRegion, ''),
        postal: addressComponents.reduce(getPostal, ''),
      }

      onSelect(parsedAddress, address);
    })
  }

  return (
    <div className={s.placesWrapper}>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextInput
              label="Address"
              {...getInputProps({
                placeholder: 'Search Places ...',
              })}
            />
            {loading && <div>Loading...</div>}
            {suggestions.length > 0 && (
              <div className={s.autocompleteDropdownContainer}>
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? s.suggestionItemActive
                    : s.suggestionItem;

                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                      key={suggestion.description}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default PlacesInput;
