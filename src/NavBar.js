import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineAudio, AiOutlineSetting } from 'react-icons/ai';

function NavBar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: <AiOutlineSetting className="settingIcon" />,
    },
    {
      id: 2,
      path: '/details',
      text: <AiOutlineAudio className="audioIcon" />,
      class: 'item2',
    },
  ];
  return (
    <nav className="navBar">

      <ul>

        {links.map((link) => (
          <li key={link.id} id={link.class}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}
export default NavBar;
