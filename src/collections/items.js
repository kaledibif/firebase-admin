import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateInput,
  DateField,
  SimpleShowLayout,
  SimpleForm,
  Filter,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

const ItemFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const ItemList = (props) => (
  <List {...props} filters={<ItemFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="value" />
      <TextField source="date" />
      <ShowButton label="Show" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
);

export const ItemShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="value" />
      <TextField source="date" />
      <TextField source="details" />
      <DateField source="createdAt" options={{ disabled: true }} />
      <DateField source="updatedAt" options={{ disabled: true }} />
    </SimpleShowLayout>
  </Show>
);

export const ItemCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="value" />
      <TextInput source="date" />
      <TextInput source="details" />
    </SimpleForm>
  </Create>
);

export const ItemEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <DateInput source="createdAt" options={{ disabled: true }} />
      <DateInput source="updatedAt" options={{ disabled: true }} />
      <TextInput source="name" />
      <TextInput source="value" />
      <TextInput source="date" />
      <TextInput source="details" />
    </SimpleForm>
  </Edit>
);
