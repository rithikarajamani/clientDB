import React from 'react';
import { Sidebar } from "primereact/sidebar";


function RemarksForm({ remarksVisibleRight, setRemarksVisibleRight }) {
    return ( 
        <Sidebar visible={remarksVisibleRight} position="right" onHide={() => setRemarksVisibleRight(false)}>
            <h2>Right Sidebar</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </Sidebar>
     );
}

export default RemarksForm;