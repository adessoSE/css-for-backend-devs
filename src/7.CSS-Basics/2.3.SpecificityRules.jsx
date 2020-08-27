import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading>Spezifitätsregeln</Heading>
            <UnorderedList>
                <ListItem>Universal Selektoren hat keine Stärke</ListItem>
                <ListItem>Elemente / Pseudo Elemente Selektoren =&gt; 1 pt</ListItem>
                <ListItem>Klassen / Pseudo Klassen / Attribute Selektoren =&gt; 10 pt</ListItem>
                <ListItem>Id Selector =&gt; 100 pt</ListItem>
                <ListItem>Inline Styles =&gt; 1000 pt</ListItem>
                <ListItem>!important =&gt; 10000 pt</ListItem>
                <ListItem>:(not) selektor hat keine Stärke</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
