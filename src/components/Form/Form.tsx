import { FC, useState } from 'react';
import { Field } from '../Field/Filed';
import { CustomCheckBox } from '../CustomCheckbox/CustomCheckbox';

export const Form: FC = () => {
  const [isReverse, setIsReverse] = useState<boolean>(false);
  return (
    <form action='#!' onSubmit={(event) => event.preventDefault()}>
      {!isReverse ? (
        <>
          <CustomCheckBox
            labelText='Reverse order'
            htmlFor='check'
            type='checkbox'
            name='check'
            id='check'
            value={isReverse}
            checked={isReverse}
            onChange={(event) => setIsReverse(event.target.checked)}
          />
          <Field key='FirstName ' label='FirstName ' />
          <Field key='LastName ' label='LastName ' />
        </>
      ) : (
        <>
          <CustomCheckBox
            labelText='Reverse order'
            htmlFor='check'
            type='checkbox'
            name='check'
            id='check'
            value={isReverse}
            checked={isReverse}
            onChange={(event) => setIsReverse(event.target.checked)}
          />
          <Field key='LastName ' label='LastName ' />
          <Field key='FirstName ' label='FirstName ' />
        </>
      )}
    </form>
  );
};
