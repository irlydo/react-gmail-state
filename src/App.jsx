import { useState } from 'react'
import Header from './components/header'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  const [emails, setEmails] = useState(initialEmails);
  let filteredEmails = emails;

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          >
            <span className="label">Inbox</span>
            <span className="count">3</span>
          </li>
          <li
            className="item"
          >
            <span className="label">Starred</span>
            <span className="count">2</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>{filteredEmails.map(email =>
         <li key={email.id} className="email">
          <div className="select">
          <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          />
          </div>

          <div className="star">
          <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          />

          </div>
          <div className="sender">{email.sender}</div>
          <div className="title">{email.title}</div>
         </li>
         )}
        </ul>
      </main>
    </div>
  )
}

export default App