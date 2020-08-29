import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  DateInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  SelectInput,
} from "react-admin";

const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const CategoryList = (props) => (
  <List {...props} filters={<CategoryFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="type" />
      <ShowButton label="Show" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
);

export const CategoryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <TextField source="color" />
      <TextField source="icon" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const CategoryCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="type" choices={[
        { id: 'Expense', name: 'Expense' },
        { id: 'Income', name: 'Income' },
      ]} />
      <TextInput source="color" />
      <TextInput source="icon" />
      <DateInput source="createdAt" options={{ disabled: false }} />
    </SimpleForm>
  </Create>
);

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="name" />
      <TextInput source="type" />
      <TextInput source="color" />
      <TextInput source="icon" />
      <DateInput source="createdAt" options={{ disabled: true }} />
      <DateInput source="updatedAt" options={{ disabled: true }} />
    </SimpleForm>
  </Edit>
);
