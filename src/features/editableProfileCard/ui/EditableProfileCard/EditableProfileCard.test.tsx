import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';
import { $api } from 'shared/api/api';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { EditableProfileCard } from './EditableProfileCard';

const profile = {
  id: '1',
  age: 24,
  city: 'Moscow',
  country: Country.RUSSIA,
  currency: Currency.EUR,
  first: 'admin',
  lastname: 'admin',
  username: 'proadmin',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      formData: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('Handle readonly mode', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileHeader.EditButton')
    );
    expect(screen.getByTestId('EditableProfileHeader.CancelButton'));
  });

  test('Back to default values on cancel click', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileHeader.EditButton')
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'Vasya');
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'Pupkin');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Vasya');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Pupkin');

    await userEvent.click(
      screen.getByTestId('EditableProfileHeader.CancelButton')
    );

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
  });

  test('Must be the error', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileHeader.EditButton')
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
    await userEvent.click(
      screen.getByTestId('EditableProfileHeader.SaveButton')
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument();
  });

  test('If it is all okay, send PUT request on server', async () => {
    const mockPutRequest = jest.spyOn($api, 'put');
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileHeader.EditButton')
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'Vasya');
    await userEvent.click(
      screen.getByTestId('EditableProfileHeader.SaveButton')
    );

    expect(mockPutRequest).toHaveBeenCalled();
  });

  // test('test toggle', () => {
  //   renderComponent(<EditableProfileCard />);
  //   const toggleBtn = screen.getByTestId('sidebar-toggle');
  //   expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  //   fireEvent.click(toggleBtn);
  //   expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  // });
});
