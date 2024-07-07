import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WebSocketConnectionList } from "./webSocketConnection/WebSocketConnectionList";
import { WebSocketConnectionCreate } from "./webSocketConnection/WebSocketConnectionCreate";
import { WebSocketConnectionEdit } from "./webSocketConnection/WebSocketConnectionEdit";
import { WebSocketConnectionShow } from "./webSocketConnection/WebSocketConnectionShow";
import { RouterList } from "./router/RouterList";
import { RouterCreate } from "./router/RouterCreate";
import { RouterEdit } from "./router/RouterEdit";
import { RouterShow } from "./router/RouterShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"B2Delivery"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WebSocketConnection"
          list={WebSocketConnectionList}
          edit={WebSocketConnectionEdit}
          create={WebSocketConnectionCreate}
          show={WebSocketConnectionShow}
        />
        <Resource
          name="Router"
          list={RouterList}
          edit={RouterEdit}
          create={RouterCreate}
          show={RouterShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
