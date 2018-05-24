import React from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from './Providers/dataProvider';

// ---- Custom Components ---
import {CompetitionList, CompetitionCreate, CompetitionEdit} from './Competitions';
import Dashboard from './Dashboard/index';

const provider = dataProvider('http://127.0.0.1:3000');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={provider}>
    <Resource
      name="competitions"
      list={CompetitionList}
      create={CompetitionCreate}
      edit={CompetitionEdit}/>
  </Admin>
);

export default App;