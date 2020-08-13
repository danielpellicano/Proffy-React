import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFEE9uGOdcWcA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=Z7beTv6Jqncey6NehxsSougLqc-5L55M4Y3H-po3iTQ"
          alt=""
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
        justo lacus. Fusce facilisis velit in enim sagittis, vitae ornare nunc
        consectetur. Maecenas elit felis, viverra cursus eros vitae, molestie
        vulputate nulla. Quisque eget ornare purus.
        <br /> Vestibulum quis velit venenatis magna tristique vulputate et non
        arcu. Sed maximus semper justo, eget condimentum massa ultrices in.
      </p>

      <footer>
        <p>Preço/hora</p>
        <strong>R$ 80,00</strong>
        <button type="button">
          <img src={whatsappIcon} alt="" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
