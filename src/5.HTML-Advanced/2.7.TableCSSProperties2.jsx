import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading>Die CSS-Eigenschaften einer Tabelle</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`
              table {display: table;}

              thead {display: table-header-group;}
              tbody {display: table-row-group;}
              tfoot {display: table-footer-group;}
              tr {display: table-row;}
              td, th {display: table-cell;}
              
              caption {display: table-caption;}        
              colgroup {display: table-column-group;}
              col {display: table-column;}
              `}
            </CodePane>
        </div>
    );
}
export default SubHeading;