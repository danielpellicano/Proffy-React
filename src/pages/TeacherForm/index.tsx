import React from 'react';
import PageHeader from '../../components/pageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        description="O primeiro passo é preencher este formulário de inscrição"
        title="Que incrível que você quer dar aulas."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matématica' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Educação Física', label: 'Educação Física' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
