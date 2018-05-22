import React from 'react';
import { List, Edit, Create, Show, Datagrid, ReferenceField, TextField, EditButton, DisabledInput,
    LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, Filter,SimpleList,
    SimpleShowLayout, DateField, RichTextField, NumberInput, DateInput, NumberField, CardActions, ShowButton,
    ListButton, DeleteButton, RefreshButton, Button, CreateButton } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import RefreshListActions from './RefreshListActions'


export const CompetitionList = (props) => (

    <List {...props} filters={<CompetitionFilter />} actions={<RefreshListActions/>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <EditButton />
        </Datagrid>
    </List>
);

const CompetitionTitle = ({ record }) => {
    return <span>Competition {record ? `"${record.title}"` : ''}</span>;
};

const CompetitionFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Title" source="title" alwaysOn />
    </Filter>
);

export const CompetitionEdit = (props) => (
    <Edit title={<CompetitionTitle />}  {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="description" />
            <NumberInput source="magazineID" />
            <DateInput label="Start date" source="startDate"/>
            <DateInput label="Expiry date" source="expiryDate" />
        </SimpleForm>
    </Edit>
);

const CompetitionEditActions = ({ basePath, data, resource }) => (
    <CardActions>
        <ShowButton basePath={basePath} record={data} />
        <ListButton basePath={basePath} />
        <DeleteButton basePath={basePath} record={data} resource={resource} />
        <RefreshButton />
        <Button color="primary">Custom Action</Button>
    </CardActions>
);

export const CompetitionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <LongTextInput source="description" />
            <NumberInput source="magazineID" />
            <DateInput label="Start date" source="startDate"/>
            <DateInput label="Expiry date" source="expiryDate" />
        </SimpleForm>
    </Create>
);

export const CompetitionShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="description" />
            <NumberField source="magazineID" />
            <DateField label="Start date" source="startDate" />
            <DateField label="Expiry date" source="expiryDate" />
        </SimpleShowLayout>
    </Show>
);

const CompetitionActions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions>
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} />
        <RefreshButton />
        {/* Add your custom actions */}
        <Button color="primary" >Custom Action</Button>
    </CardActions>
);