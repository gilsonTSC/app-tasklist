import React from 'react';

import CadastroTasklist from './views/cadastro-tasklist'
import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="container">
      <CadastroTasklist/>
    </div>
  );
}

export default App;
