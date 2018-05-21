import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from  './dataProvider';
import config from './config';

// ---- Custom Components ---
import { PostList,PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { CompetitionList, CompetitionCreate, CompetitionEdit } from './Components/Competitions';

const provider = dataProvider('http://127.0.0.1:3000');
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} dataProvider={provider}>
        <Resource name="competitions" list={CompetitionList} create={CompetitionCreate} edit={CompetitionEdit} />
    </Admin>
);

export default App;