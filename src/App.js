import * as React from "react";
import {
  CategoryList,
  CategoryShow,
  CategoryCreate,
  CategoryEdit
} from "./collections/categories";
import {
  ItemList,
  ItemShow,
  ItemCreate,
  ItemEdit
} from "./collections/items";
import {
  Admin,
  Resource
} from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";

// Components
import LoginPage from './components/LoginPage';

// Config
import {
  firebaseConfig as config
} from './config/firebaseConfig';

const options = {
  logging: true,
  rootRef: ''
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={LoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="categories"
          list={CategoryList}
          show={CategoryShow}
          create={CategoryCreate}
          edit={CategoryEdit}
        />
        <Resource
          name="items"
          list={ItemList}
          show={ItemShow}
          create={ItemCreate}
          edit={ItemEdit}
        />
      </Admin>
    );
  }
}

export default App;
