import { Input } from './components/Input';
import { useForm } from './hooks/useForm';
import './App.css';

export const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />

      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />

      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <Input label="Email" id="email" type="email" {...email} />

      <button>Enviar</button>
    </form>
  );
};
