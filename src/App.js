import React from 'react';

import CadastroTasklist from './views/cadastro-tasklist'
import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.css'

function App() {
  return (
    <div className="container">
      <CadastroTasklist/>
    </div>
  );
}

export default App;
