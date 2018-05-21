import React from 'react';
import { List, Edit, Create, Show, Datagrid, ReferenceField, TextField, EditButton, DisabledInput,
    LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, Filter,SimpleList,
    SimpleShowLayout, DateField, RichTextField, NumberInput, DateInput} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const CompetitionList = (props) => (

    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Title" />
            <TextField source="Description" />
            <EditButton />
        </Datagrid>
    </List>
);

const CompetitionTitle = ({ record }) => {
    return <span>Competition {record ? `"${record.title}"` : ''}</span>;
};

// const CompetitionFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
//             <SelectInput optionText="name" />
//         </ReferenceInput>
//     </Filter>
// );

export const CompetitionEdit = (props) => (
    <Edit title={<CompetitionTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <RichTextInput source="description" />
            <NumberInput source="magazineID" />
            <DateInput label="Start date" source="startDate"/>
            <DateInput label="Expiry date" source="expiryDate" />
        </SimpleForm>
    </Edit>
);

export const CompetitionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="description" />
            <NumberInput source="magazineID" />
            <DateInput label="Start date" source="startDate"/>
            <DateInput label="Expiry date" source="expiryDate" />
        </SimpleForm>
    </Create>
);

export const CompetitionShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="Title" />
            <RichTextField source="Description" />
            <TextField source="Title" />
            <DateField label="Start date" source="startDate" />
            <DateField label="Expiry date" source="expiryDate" />
        </SimpleShowLayout>
    </Show>
);